const fs = require("fs");
const logger = require("./../src/config/winston");
const CONSTANTS = require("../src/constants");

const dailyReport = () => {
    const fileName = `./logs/${Date.now()}.log`;
    fs.copyFile(CONSTANTS.WINSTON_LOGS_PATH, fileName, function (err) {
      if (err) {
        err.status = 503;
        logger.error(err);
      } else {
        fs.readFile(fileName, "utf-8", function (error, data) {
          if (error) {
            error.status = 503;
            logger.error(error);
          } else {
            const dataArray = data.split(";");
            dataArray.pop();
            const outputArray = dataArray.map((logString) => {
              console.log(logString);
              const parsedLog = JSON.parse(logString);
              delete parsedLog.stackTrace;
              return parsedLog;
            });
            fs.writeFile(
              fileName,
              JSON.stringify(outputArray, null, 2),
              function (err, data) {
                if (!err) {
                  console.log("Done");
                  fs.writeFile(CONSTANTS.WINSTON_LOGS_PATH, "", function (err, data) {
                    if (!err) {
                      console.log("Cleared");
                    } else {
                      err.status = 503;
                      logger.error(err);
                    }
                  });
                } else {
                  err.status = 503;
                  logger.error(err);
                }
              }
            );
          }
        });
      }
  });
};

module.exports = dailyReport;
