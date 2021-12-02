const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

module.exports = (err, req, res, next) => {
  console.log(err);

  if (err instanceof TokenExpiredError) {
    return res.status(419).send('Token has expired');
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).send('Bad token');
  }

  if (!err.message || !err.status) {
    return res.status(500).send('Server Error');
  }
  
  return res.status(err.status).send(err.message);
};
