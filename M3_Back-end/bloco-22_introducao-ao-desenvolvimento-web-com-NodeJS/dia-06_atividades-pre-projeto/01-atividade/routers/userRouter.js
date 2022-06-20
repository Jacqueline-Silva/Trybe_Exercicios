const express = require('express');
const validateRegister = require('../validates/validateRegister');

const router = express.Router();

const OK = 200;
const ERR = 401;

router.post('/register', validateRegister, (_request, response) => {
  response.status(OK).json({ message: 'user created' })
});

module.exports = router;