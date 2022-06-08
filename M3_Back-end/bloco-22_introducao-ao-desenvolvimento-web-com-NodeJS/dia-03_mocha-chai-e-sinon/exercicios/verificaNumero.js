function verificaNumero(numero) {
  if(numero > 0) return 'positivo';
  if(numero < 0) return 'negativo';
  if(numero === 0) return 'neutro';
};

console.log(verificaNumero(2));

module.exports = verificaNumero;