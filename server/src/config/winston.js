const { format, createLogger, transports } = require("winston");
const { printf, combine, timestamp } = format;
const { WINSTON_LOGS_PATH } = require("./../constants");

const logFormat = printf(({ status, message, timestamp, stack }) => {

  if (!status) {
    status = 500
  }

  if (!message) {
    message = "Unexpected error"
  }

  if (!timestamp) {
    timestamp = Date.now()
  }

  if (!stack) {
    stack = ""
  }

  return `{"message": "${message.replace(/(")/gm, "'")}", "time": ${new Date(
    timestamp
  ).getTime()}, "code": ${status}, "stackTrace": "${stack.replace(/(")/gm, "'")}"};`.replace(
    /(\r\n|\n|\r)/gm,
    ""
  );
});

const logger = createLogger({
  format: combine(timestamp(), format.errors({ stack: true }), logFormat),
  transports: [
    new transports.File({
      filename: WINSTON_LOGS_PATH,
    }),
  ],
});

module.exports = logger;
