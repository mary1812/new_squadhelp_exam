const { User, RefreshToken } = require('../models');
const AuthService = require('../services/authService');
const CONSTANTS = require('./../constants');

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({ where: { email } });

    if (user && (await user.comparePasswords(password))) {

      const data = await AuthService.createSession(user);

      res.cookie('refreshToken', data.tokenPair.refreshToken, { overwrite: true, httpOnly: true })
      data.tokenPair.refreshToken = CONSTANTS.FAKE_REFRESH_TOKEN

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

    res.cookie('refreshToken', data.tokenPair.refreshToken, { overwrite: true, httpOnly: true })
    data.tokenPair.refreshToken = CONSTANTS.FAKE_REFRESH_TOKEN

    res.status(200).send({ data });
  } catch (err) {
    next(err);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    
    const refresh = req.cookies.refreshToken

    const foundToken = await RefreshToken.findOne({
      where: {
        value: refresh,
      },
    });

    const data = await AuthService.refreshSession(foundToken);

    res.cookie('refreshToken', data.tokenPair.refreshToken, { overwrite: true, httpOnly: true })
    data.tokenPair.refreshToken = CONSTANTS.FAKE_REFRESH_TOKEN

    res.status(200).send({
      data,
    });
  } catch (err) {
    next(err);
  }
};
