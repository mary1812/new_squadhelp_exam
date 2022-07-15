require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
require("./dbMongo/mongoose");
const router = require("./router");
const controller = require("./socketInit");
const handlerError = require("./handlerError/handler");
const CONSTANTS = require("./constants");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/public", express.static(CONSTANTS.FILES_PATH));
app.use(router);
app.use(handlerError);

setInterval(() => {
  const fileName = `./logs/${Date.now()}.log`;
  fs.copyFile("./logs/server.log", fileName, function (err) {
    if (err) {
      console.log("Error", err);
    } else {
      fs.readFile(fileName, "utf-8", function (error, data) {
        if (error) {
          console.log(error);
        }
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
              fs.writeFile("./logs/server.log", "", function (err, data) {
                if (!err) {
                  console.log("Cleared");
                } else {
                  console.log(err);
                }
              });
            } else {
              console.log(err);
            }
          }
        );
      });
    }
  });
}, 50000);

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
controller.createConnection(server);
