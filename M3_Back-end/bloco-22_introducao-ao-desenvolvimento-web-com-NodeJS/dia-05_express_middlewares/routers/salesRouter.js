const express = require('express');
const router = express.Router();
const validateBody = require('../validations');

const OK_201 = 201;

router.post('/', [ validateBody, function (_request, response) {
  response.status(OK_201).json({ message: 'Venda cadastrada com sucesso' });
}]);

module.exports = router;