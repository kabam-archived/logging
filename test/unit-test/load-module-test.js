var mocha = require('mocha')
	, should = require('should');

describe('Load module', function () {
	it('should loaded the module', function () {
		var logging = require('./../../index');

		should.exist(logging);
	});
});