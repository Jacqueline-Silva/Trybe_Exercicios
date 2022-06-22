const express = require('express');
const validateAuth = require('../validations/validateAuth');
const router = express.Router();
const validateSales = '../validations/validateSales'

const OK = 201;

router.post('/', [validateAuth, validateSales, function (_request, response) {
  response.status(OK).json({ message: 'Venda cadastrada com sucesso' });
}]);

module.exports = router;