require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const router = require("./router");
const controller = require("./socketInit");
const handlerError = require("./handlerError/handler");
const CONSTANTS = require("./constants");
const dailyReport = require("./../logger/dailyReport")
const CronJob = require('cron').CronJob;
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: CONSTANTS.SQUADHELP_APPLICATION_LINK,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use("/public", express.static(CONSTANTS.FILES_PATH));
app.use(router);
app.use(handlerError);

const job = new CronJob(
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
