const { User, RefreshToken } = require('../models');
const AuthService = require('../services/authService');

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({ where: { email } });

    if (user && (await user.comparePasswords(password))) {

      const data = await AuthService.createSession(user);

      return res.status(200).send({ data });
    }

    res.status(404).send('Wrong user data');
  } catch (err) {
    next(err);
  }
};

module.exports.registration = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    const data = await AuthService.createSession(user);

    res.status(200).send({ data });
  } catch (err) {
    next(err);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    const {
      body: { refreshToken: refresh },
    } = req; 

    const foundToken = await RefreshToken.findOne({
      where: {
        value: refresh,
      },
    });

    const data = await AuthService.refreshSession(foundToken);

    res.status(200).send({
      data,
    });
  } catch (err) {
    next(err);
  }
};
