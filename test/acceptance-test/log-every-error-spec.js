var
	should = require('should'),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;

// Setup test database
var
	mongoClient = new MongoClient(new Server('localhost', 27017)),
	logsDb = {};

	before(function () {
		it('should be connected', function (done) {
			mongoClient.open(function(err, mongoClient) {
				logsDb = mongoClient.db('mwc-logs');
				logsDb.serverConfig.connected.should.be.ok;
				logsDb.collection('log', function (err, openedCollection) {
					openedCollection.remove(function() {
						done();
					});
				});
			});
		});
});

describe('Load the module', function () {
	describe('#error()', function () {
		it('should have an error method', function () {
			var logging = require('./../../lib/mwc-logging');

			logging.should.have.property('log');
			logging.should.have.property('profile');
			logging.should.have.property('startTimer');
			logging.should.have.property('silly');
			logging.should.have.property('debug');
			logging.should.have.property('verbose');
			logging.should.have.property('info');
			logging.should.have.property('warn');
			logging.should.have.property('error');
		})
	})
});

// describe('Scenario 1: Error log should be recorded to `mwc-log` database', function () {
// });

after(function () {
	// close db connection
	logsDb.close();
});
