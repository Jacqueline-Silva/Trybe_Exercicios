// FIXAR - PARTE 1 - forEach() ===================================

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(showEmailList) 


// FIXAR - PARTE 2 - find() ========================================

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (call) => {
  return call.find(number => number % 3 === 0 && number % 5 === 0)
}
console.log(findDivisibleBy3And5(numbers))

// 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (call) => {
  let five = call.find(letter => letter.length === 5)
  return five;
}
console.log(findNameWithFiveLetters(names))

// 3 'incorreto'
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(playlist, id) {
  return playlist.find(disco => disco.id === id)
}
console.log(findMusic(musicas, '31031685'))

// FIXAR - PARTE 3 - .some + .every ================================

// 1 'correto'
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some(element => element === name);
}
console.log(hasName(names, 'Ana'))


// 2 'incorreto?'
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every(element => element.age >= minimumAge)
}
console.log(verifyAges(people, 16));

// FIXAR - PARTE 4 - .sort ========================================

// 1 'incorreto'
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => a.age - b.age)
console.log(people);


// 2 'precisa concluir o 1'
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => b.age - a.age)

console.log(people);

// EXTRA - Pra ter certeza que eu entendi
// (Para array de obj, precisa ser pela propriedade)
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((nameA, nameB) => nameA.name - nameB.name) // *Não funcionou*
console.log(people)

people.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
console.log(people)

/*
para array = array.sort()
para numeros = array.sort((a, b) => a - b) **ordem crescente
*/
