var winston = require('winston');

// instantiating our own logger via Winston
var logger = new(winston.Logger)({
	transports: [
		new (winston.transports.Console)({
      json: true
    })
	],
	exceptionHandlers: [
		new winston.transports.File({ filename: 'exceptions.log' })
	]
});

// extending the Winston functionality to our module
var mwcLogger = {};
logger.extend(mwcLogger);

module.exports = mwcLogger;