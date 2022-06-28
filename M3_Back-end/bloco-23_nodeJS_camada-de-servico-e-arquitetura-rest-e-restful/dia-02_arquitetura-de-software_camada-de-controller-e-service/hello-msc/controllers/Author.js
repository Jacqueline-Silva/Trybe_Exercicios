const Joi = require('joi');
const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  return res.status(200).json(author);
};

const createAuthor =  async (req, res, next) => {
  const {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  } = req.body;

  // Joi descreve o objeto que esperamos receber na requisição. 
  // Para isso, Joi.object(), passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, lastName }); // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras

  if (error) {
    return next(error);
  }

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};