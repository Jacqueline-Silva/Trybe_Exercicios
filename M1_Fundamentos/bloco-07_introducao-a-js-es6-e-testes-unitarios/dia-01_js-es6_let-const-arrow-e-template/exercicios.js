// PARTE 1 ======================================================

// 1
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

// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenando = (a, b) => a - b;

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente! 
-> ${oddsAndEvens.sort(ordenando)}`); // será necessário alterar essa linha 😉

/*
REF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

// PARTE 2 ========================================================


// 1 
const fatorial = (numero) => {
  let fatorado = numero;
  for (let index = 1; index < numero; index += 1) {
    fatorado *= index;
  } return fatorado;
}; 
console.log(fatorial(5));

/* 
GABARITO: (RECURSIVA E OPER.TERNARIO)
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
*/

// 2 
const maiorPalavra = (frase) => {
  const separaParavras = frase.split(' ');
  let guardaMaiorPalavra = '';
  for (let index = 0; index < separaParavras.length; index +=1) {
    if(separaParavras[index].length > guardaMaiorPalavra.length) {
      guardaMaiorPalavra = separaParavras[index];
    } 
  }
  return guardaMaiorPalavra;
}
console.log(maiorPalavra('João roubou pão na casa do Roberto e Maria foi fofocar para Jacqueline'));

// 3 - ******* Arquivo: "exercicio3.html" ***********

// 4 
const skills = ['Lealdade', 'HTML', 'CSS', 'Escuta ativa', 'Organização'];

const substitui = (string) => {
  let original = 'Tryber x aqui';
  let substituido = original.replace('x', string);

  let resultado = 
    `${substituido}!
    Minhas cinco principais habilidades são:
    ${skills.sort()}
    #GoTrybe.`;
  
  return resultado;
}
console.log(substitui('Jacqueline'));
