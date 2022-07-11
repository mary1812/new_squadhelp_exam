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
      const data = fs.readFileSync(fileName, "utf-8");
      const dataArray = data.split(";");
      
      const outputArray = dataArray.map((obj) => {
        const parsedLog = JSON.parse(obj)
        return `{message: ${parsedLog.message}, code: ${parsedLog.code}, time: ${parsedLog.time}}`;
      });
      fs.writeFile(fileName, JSON.stringify(outputArray), console.log("Done"))
    }
  });
}, 50000);

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
controller.createConnection(server);
