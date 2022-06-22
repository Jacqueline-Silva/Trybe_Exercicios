const moment = require('moment');

const valida1a3 = /[1-3]/;
const ERR_400 = 400;

function validateSales(request, response, next) {
  const { productName, infos } = request.body;

  if (!productName || productName.length < 4) {
    if(!productName) {
      return response.status(ERR_400).json({ message: 'O campo productName é obrigatório' });
    }
    return response.status(ERR_400).json({ message: 'O campo productName deve ter pelo menos 4 caracteres' });
  }

  if (!infos) {
    return response.status(ERR_400).json({ message: 'O campo infos é obrigatório' });
  }
  if (!infos.saleDate) {
    return response.status(ERR_400).json({ message: 'O campo saleDate é obrigatório' });
  }
  if (moment(infos.saleDate, 'DD/MM/YYYY',true).isValid() === false) {
    return response.status(ERR_400).json({ message: 'O campo saleDate não é uma data válida' });
  }
  if (!infos.warrantyPeriod) {
    return response.status(ERR_400).json({ message: 'O campo warrantyPeriod é obrigatório' });
  }
  if (valida1a3.test(infos.warrantyPeriod) === false) {
    return response.status(ERR_400).json({ message: 'O campo warrantyPeriod precisa estar entre 1 e 3' });
  }

  next();
};

module.exports = validateSales;

/**
 * REFERENCIAS: 
 *  moment: 
 *    https://momentjs.com/docs/#/parsing/is-valid/
 *  test:
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
 */