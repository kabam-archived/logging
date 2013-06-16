/**
* Scenario 1: Error log should be recorded to `log` database
*/


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
