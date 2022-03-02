// FIXAR - SPREAD OPERATOR

const specialFruit = ['banana', 'abacate', 'caqui', 'mamão'];
const additionalItens = ['sorvete', 'chocolate', 'açucar'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]

console.log(fruitSalad(specialFruit, additionalItens));