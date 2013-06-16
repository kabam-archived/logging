var winston = require('winston');

// instantiating our own logger via Winston
var logger = new(winston.Logger)({
	transports: [
		new (winston.transports.Console)()
	]
});

// extending the Winston functionality to our module
var mwcLogger = {};
logger.extend(mwcLogger);
