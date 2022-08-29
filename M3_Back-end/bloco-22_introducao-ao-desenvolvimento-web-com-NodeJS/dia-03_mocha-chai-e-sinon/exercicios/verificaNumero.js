function verificaNumero(numero) {
  if(typeof numero !== 'number') return `"${numero}" não é um número`;

  if(numero > 0) return 'positivo';
  if(numero < 0) return 'negativo';
  return 'neutro';
};

module.exports = verificaNumero;