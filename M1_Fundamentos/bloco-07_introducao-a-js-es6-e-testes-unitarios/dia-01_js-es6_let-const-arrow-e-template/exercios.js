/* PARTE 1 ======================================================

1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
    Modifique a estrutura da função para que ela seja uma arrow function .
    Modifique as concatenações para template literals .
*/

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}
testingScope(true);

/* 
2 -Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenando = (a, b) => a - b;

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente! 
-> ${oddsAndEvens.sort(ordenando)}`); // será necessário alterar essa linha 😉

/*
REF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

// PARTE 2 ========================================================


//  1 - Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (numero) => {
  let fatorado = numero;
  for (let index = 1; index < numero; index += 1){
    fatorado *= index
  } return fatorado
}; 
console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
