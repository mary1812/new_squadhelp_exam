require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const router = require("./router");
const controller = require("./socketInit");
const handlerError = require("./handlerError/handler");
const CONSTANTS = require("./constants");
const dailyReport = require("./../logger/dailyReport")
var CronJob = require('cron').CronJob;

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/public", express.static(CONSTANTS.FILES_PATH));
app.use(router);
app.use(handlerError);

var job = new CronJob(
  CONSTANTS.DAILY_CRON,
  function () {
    dailyReport ();
  }
)
job.start()

const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
controller.createConnection(server);
