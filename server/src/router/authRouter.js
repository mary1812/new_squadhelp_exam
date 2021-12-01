const authRouter = require('express').Router();
const AuthController = require('../controllers/authController.js');
const { checkRefreshToken } = require('../middlewares/tokenMw.js');
const Validators = require('../middlewares/validators.js');

authRouter.post('/login', Validators.validateLogin, AuthController.login);

authRouter.post('/registration', Validators.validateRegistrationData ,AuthController.registration);

authRouter.post('/refresh', checkRefreshToken, AuthController.refresh);

module.exports = authRouter;