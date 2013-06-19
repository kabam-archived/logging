var
	should = require('should'),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;

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