// PARTE 2 - FOR/IN

// 1 - utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let index in names) {
    console.log ("Olá " + names.person1 +", " + names.person2 + ", " + names.person3)
}

// 2 - utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in car) {
    console.log (index, car[index])
}