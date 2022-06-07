// código de demonstração de uma video-aula, criado por Maria Carolina.

const { sum, sub, mul, div } = require('./operacoes');
const readLine = require('readline-sync');

console.log('Calculadora Simples');

const num1 = readLine.questionInt("Digite um número: ");
const operador = readLine.question("Digite a operação: (+, -, * ou /) ");
const num2 = readLine.questionInt("Digite outro número: ");

switch (operador) {
  case "+":
    sum(num1, num2)
    break;
  case "-":
    sub(num1, num2)
    break;
  case "*":
    mul(num1, num2)
    break;
  case "/":
    div(num1, num2)
    break;
  default:
    console.log("Opa, a operação é desconhecida ou não foi implementada ainda")
}