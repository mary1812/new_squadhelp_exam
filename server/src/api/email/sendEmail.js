const nodemailer = require("nodemailer");
const logger = require("./../../config/winston");
const CONSTANTS = require("./../../constants");

module.exports.sendEmail = (userEmail, userName, offerId, contestId, status) => {
  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    port: 587,
    auth: {
      user: CONSTANTS.SQUADHELP_EMAIL,
      pass: CONSTANTS.SQUADHELP_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: CONSTANTS.SQUADHELP_EMAIL,
    to: userEmail,
    subject: "Solution about your offer",
    html: `<body> <h2>Dear, ${userName}</h2> <br/>  <p>Your offer id #${offerId} to the contest #${contestId} has been ${status} by moderator,</p><br/><i>The <a href="${CONSTANTS.SQUADHELP_APPLICATION_LINK}">Squadhelp</a> Team</i></body>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error(error);
      return false;
    } else {
      return true;
    }
  });
};