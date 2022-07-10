const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const logger = require('./../config/winston');

module.exports = (err, req, res, next) => {
  console.log(err);

  if (err instanceof TokenExpiredError) {
    err.status = 419
    logger.error(err);
    return res.status(419).send('Token has expired');
  }

  if (err instanceof JsonWebTokenError) {
    err.status = 401
    logger.error(err);
    return res.status(401).send('Bad token');
  }

  if (!err.message || !err.status) {
    err.status = 500
    logger.error(err);
    return res.status(500).send('Server Error');
  }
  
  err.status = 400
  logger.error(err);
  return res.status(err.status).send(err.message);
};
