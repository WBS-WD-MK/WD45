const express = require('express');
const authenticate = require('../middleware/auth');
const authRouter = express.Router();
const { register, login, logout, getLoggedInUser } = require('../controllers/users');
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/currentUser', authenticate, getLoggedInUser);

module.exports = authRouter;
