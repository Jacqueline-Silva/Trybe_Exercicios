const express = require('express');
const rescue = require('express-rescue');
const generateToken = require('../randomToken');

const validateSignup = require('../validations/validadeSignup');
const router = express.Router();

const OK = 200;

router.post('/',
  validateSignup,
  rescue( function (_request, response) {
    return response.status(OK).json({ token: generateToken });
}));

module.exports = router;