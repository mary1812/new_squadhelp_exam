const { format, createLogger, transports } = require('winston');
const { printf, combine, timestamp } = format;
const {WINSTON_LOGS_PATH}  = require('./../constants');

const logFormat = printf(({ status, message, timestamp, stack }) => {
  return `{message: "${message}", time: ${new Date(timestamp).getTime()}, code: ${status}, stackTrace: {${stack}}}`;
});

const logger = createLogger({
  format: combine(timestamp(),
    format.errors({stack: true}),
    logFormat),
  transports: [
    new transports.File({
      filename: WINSTON_LOGS_PATH,
    }),
  ],
});

module.exports = logger;
