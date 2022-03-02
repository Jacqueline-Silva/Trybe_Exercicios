// COURSE - PARTE THROW E TRY/CATCH ==================================================
// EXEMPLOS

// 1 - Arrow function para soma de dois valores.
const sum = (value1, value2) => value1 + value2;
console.log(sum(5, 5)); // resultado: 10

// 2 - Retorna '23', pois soma o valor 'numérico 2' com a 'string de 3'.
const sum = (value1, value2) => value1 + value2;
console.log(sum(2, '3')); // resultado: 23

// 3 - Condicional para impedir a soma de valores que não forem do tipo 'number'.
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};
console.log(sum(2, '3')); // Resultado: 'Os valores devem ser numéricos'.

// 4 -
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};
console.log(sum(2, '3'));

// 5 -
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
    throw error.message; 
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
                        
customer.lastName = 'Faria';
console.log(customer);
// Ou semelhante a de cima:  objeto['propriedade'] = 'valor' (03)
                         
customer['secondName'] = 'Silva';
console.log(customer);

// Exercício FIXAR

let objeto = {
  nascimento: 1996,
};
let mes = 'mês';
let valor = 'Agosto';

const novo = (par1, par2, par3) => {
  par1[par2] = par3;
 return par1
} 
console.log(novo (objeto, mes, valor));
