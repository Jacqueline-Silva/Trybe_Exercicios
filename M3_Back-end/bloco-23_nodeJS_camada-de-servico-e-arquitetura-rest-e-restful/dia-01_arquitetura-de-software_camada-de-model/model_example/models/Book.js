const connection = require('./connection');
const Author = require('./Author')

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

const getByAuthor = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id = ?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}
const getBookById = async (id) => {
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT * FROM model_example.books WHERE id = ?'
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(serialize)[0];
};

const isValidBook = async (title, authorId) => {
  if (!title || title.length < 3) return false;
  if (!authorId || !(await Author.findById(authorId))) return false;

  return true;
};

const createBook = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);



module.exports = {
  getAllBooks,
  getByAuthor,
  getBookById,
  createBook,
  isValidBook,
};