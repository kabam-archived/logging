var should = require('should');

describe('Load module', function () {
	it('should loaded the module', function () {
		var logging = require('./../../lib/mwc-logging');

		should.exist(logging);
	});
});