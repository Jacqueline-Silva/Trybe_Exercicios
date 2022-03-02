// FIXAR - PARTE 1 -ARRAY
//1-1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = (menu[1]);

console.log(menuServices);

//1-2
let indexOfPortfolio = (menu[2]);

console.log(indexOfPortfolio);

//1-3
menu.push ("Contatos");

console.log (menu);


// FIXAR - PARTE 2 - FOR
//2-1
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//2-2
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index ++) {
    console.log (groceryList[index]);
}

//2-3 - vídeo
var listaDeNomes = ["Joana", "Maria", "Lucar"] 

for (let index = 0; index < listaDeNomes.length; index++){
    let mensagem = "Boas vindas, " + listaDeNomes[index] + "!";
    console.log (mensagem);
}


// FIXAR - PARTE 3 - FOR/OF - LOOP
//exemplos

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//3-1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {
    console.log(elementos);
}
