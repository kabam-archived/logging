var
	should = require('should'),
	MongoClient = require('mongodb').MongoClient;

var logger = require('./../../lib/mwc-logging');

describe('Load the module', function () {
	describe('#error()', function () {
		it('should have an error method', function () {
			logger.should.have.property('log');
			logger.should.have.property('profile');
			logger.should.have.property('startTimer');
			logger.should.have.property('silly');
			logger.should.have.property('debug');
			logger.should.have.property('verbose');
			logger.should.have.property('info');
			logger.should.have.property('warn');
			logger.should.have.property('error');
		});
	});
});

// Scenario 1
describe('Error log should be recorded', function () {
	describe('Log error', function () {
		logger.error('Hello Error!');

		it('should log error to DB', function (done) {
				// Connect to the db
				MongoClient.connect('mongodb://localhost:27017/mwc_logs_test',
					function(err, db) {
						if(!err) {
							console.log('We are connected');
							db.collection('log', function (err, openedCollection) {
								openedCollection.find().toArray(function (err, items) {
									items.should.have.length(1);
									items.should.be.an.instanceOf(Array);
									items[0].level.should.equal('error');
									done();
								});
							});
						}
					});
			});
	});
});