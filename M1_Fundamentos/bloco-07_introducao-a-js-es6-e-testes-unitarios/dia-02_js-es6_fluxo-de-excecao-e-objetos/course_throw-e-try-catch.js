// COURSE - PARTE THROW E TRY/CATCH ==================================================
// EXEMPLOS

// Arrow function para soma de dois valores.
const sum = (value1, value2) => value1 + value2;
console.log(sum(5, 5)); // resultado: 10

// Retorna '23', pois soma o valor 'numérico 2' com a 'string de 3'.
const sum = (value1, value2) => value1 + value2;
console.log(sum(2, '3')); // resultado: 23

// Condicional para impedir a soma de valores que não forem do tipo 'number'.
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};
console.log(sum(2, '3')); // Resultado: 'Os valores devem ser numéricos'.

/* Fluxo de exceção: Quando ocorrer um erro no Js, deve-se lançar uma exceção que interrompe o funcionamento do código. */
// THROW: é uma expressão que serve para lançar a exceção que eu criei 
// NEW: serve para 'criar' um objeto personalizado do JS.
// ERROR: representa um erro
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};
console.log(sum(2, '3'));

/*
    Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. 
    Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . 
    Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
*/
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
}; 

const sum = (value1, value2) => {
  try { // TRY: quando bloco é rodado com sucesso.
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) { // CATCH: quando o bloco TRY falha.
    throw error.message; // error.message: propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.
  }
};
console.log(sum(2, '3'));

// COURSE - PARTE 1 - KEYS ===========================================================

// Temos a seguinte chave
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// Para adicionar, podemos reescrever a chave (01)
const customer = {
  firstName: 'Roberto',
 lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};
console.log(customer);
// Outra forma de adicionar:  objeto.propriedade = 'valor' (02)
//                           variavel.chave = 'valor';
customer.lastName = 'Faria';
console.log(customer);
// Ou semelhante a de cima:  objeto['propriedade'] = 'valor' (03)
//                           variavel['chave'] = 'valor' (03)
customer['secondName'] = 'Silva';
console.log(customer);

// Exercício

let objeto = {
  nascimento: 1996,
};
let chave = 'mes';
let valor = 'Agosto';

// objeto[chave] = valor;
// console.log(objeto)

const novo = (par1, par2, par3) => {
 let seila = par1[par2] = par3
}
console.log(novo (objeto, 'mes', 'agosto'))

