const Book = require('../models/Book');

const getAllBooks = async () => Book.getAllBooks();

const getBookById = async (id) => {
  const book = await Book.getBookById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }
  return book;
};

const createBook = async (title, authorId) => {
  const existingBook = await Book.findByBookName(title, authorId);

  if (existingBook) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um livro já existe com esse nome',
      },
    };
  }
  return Book.createBook(title, authorId);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};