var
winston = require('winston'),
MongoDB = require('winston-mongodb').MongoDB;

// instantiating our own logger via Winston
var logger = new(winston.Logger)({
	transports: [
  new winston.transports.MongoDB({ db: 'mwc_logs_test', level: 'error',
    handleExceptions: true })
  ]
});

// extending the Winston functionality to our module
var mwcLogger = {};
logger.extend(mwcLogger);

module.exports = mwcLogger;