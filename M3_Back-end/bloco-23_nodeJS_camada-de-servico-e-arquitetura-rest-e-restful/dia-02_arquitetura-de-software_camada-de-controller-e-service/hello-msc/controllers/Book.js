const Joi = require('joi');
const Book = require('../services/Book');

const getAllBooks = async (_req, res) => {
  const books = await Book.getAllBooks();

  res.status(200).json(books);
};

const getBookById = async (req, res, next) => {
  const { id } = req.params;
  const book = await Book.getBookById(id);

  if (book.error) return next(book.error);

  return res.status(200).json(book);
};

const createBook =  async (req, res, next) => {
  const { title, author_id } = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate({ title, author_id });

  if (error) {
    return next(error);
  }

  const newBook = await Book.createBook(title, author_id);

  if (newBook.error) return next(newBook.error);

  return res.status(201).json(newBook);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};