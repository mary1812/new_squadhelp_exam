const authRouter = require('express').Router();
const AuthController = require('../controllers/authController.js');

authRouter.post('/login', AuthController.login);

authRouter.post('/registration', AuthController.registration);

authRouter.post('/refresh', AuthController.refresh);

module.exports = authRouter;