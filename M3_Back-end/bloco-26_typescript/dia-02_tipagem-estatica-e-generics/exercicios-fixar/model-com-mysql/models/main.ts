import connection  from "./connection";
import readline from  'readline-sync';
import BookModel, { Book } from "./Book";

const main = async () => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o título do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title , price , author , isbn };

  const createdBook = await bookModel.create(newBook);
  console.log('livro cadastrado', createdBook)

  const books = await bookModel.getAll();
  console.log('livros cadastrados', books)
}

main();

// npx ts-node ./models/main.ts