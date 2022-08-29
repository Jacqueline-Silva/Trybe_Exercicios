const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAllBooks = async () => {
  const query = 'SELECT * FROM model_example.books;'
  const [books] = await connection.execute(query);

  return books.map(serialize);
};

const getBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?'
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(serialize)[0];
};

const createBook = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

const findByBookName = async (title, authorId) => {
  let query = `SELECT * FROM model_example.books
  WHERE title = ? AND author_id = ?`;

  const [bookData] = await connection.execute(query,  [title, authorId]);

  if (bookData.length === 0) return null;

  return serialize(bookData);
};


module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  findByBookName,
};