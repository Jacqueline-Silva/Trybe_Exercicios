const express = require('express');
const generateToken = require('../token');
const validateLogin = require('../validates/validateLogin');
const validateRegister = require('../validates/validateRegister');

const router = express.Router();

const OK = 200;

router.post('/register', validateRegister, (_request, response) => {
  response.status(OK).json({ message: 'user created' });
});

router.post('/login', validateLogin, (_request, response) => {
  response.status(OK).json({ token: generateToken() });
});

module.exports = router;