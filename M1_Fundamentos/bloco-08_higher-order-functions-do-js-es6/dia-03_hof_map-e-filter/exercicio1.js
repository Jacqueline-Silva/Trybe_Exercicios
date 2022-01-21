// EXERCÍCIO 1 - 

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 
console.log('========================= EXERCÍCIO 1 =========================');
const booksName = (book) => book.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`) 
console.log(booksName(books))


// 2
console.log('========================== EXERCÍCIO 2 =========================');
const yearInAge = (relYear, birthday) => {
  let transform = relYear - birthday;
  return transform;
};

const nameAndAge = (array) => {
  let arrayNameAge = [];
  array.map((e) => {
    let newArray = {
      age: yearInAge(e.releaseYear, e.author.birthYear), 
      author: e.author.name
    }
    arrayNameAge.push(newArray);
  })
  return arrayNameAge.sort((a, b) => a.age - b.age);
};
console.log(nameAndAge(books));


// 3
console.log('========================== EXERCÍCIO 3 =========================');
const ficAndFan = (arrayBooks) => {
  return arrayBooks.filter((e) => e.genre === 'Fantasia' || e.genre === 'Ficção Científica')
};
console.log(ficAndFan(books));


// 4
console.log('========================== EXERCÍCIO 4 =========================');
const verifyOldBooks = (yearPubli) => 2022 - yearPubli;

const oldBooksOrdered = (books) => {
  return books.filter((e) => verifyOldBooks(e.releaseYear) > 60).sort((a, b) => {
    return a.releaseYear - b.releaseYear;
  });
};
console.log(oldBooksOrdered(books));


// 5
console.log('========================== EXERCÍCIO 5 =========================');
const  bookSort = (book) => book.filter((e) => e.genre === 'Ficção Científica' || e.genre === 'Fantasia').map((e2) => e2.author.name).sort();
console.log(bookSort(books));


// 6
console.log('========================== EXERCÍCIO 6 =========================');
const verify60 = (verifyBook) => 2022 - verifyBook;

const books60y = (book) => {
  return book.filter((e) => verify60(e.releaseYear) > 60).map((e) => e.name);
};
console.log(books60y(books));


// 7 - incompleto
console.log('========================== EXERCÍCIO 7 =========================');

const author3Dots = (author) => {
 // return author.find((e) => e.author.name)
};
console.log(author3Dots(books))