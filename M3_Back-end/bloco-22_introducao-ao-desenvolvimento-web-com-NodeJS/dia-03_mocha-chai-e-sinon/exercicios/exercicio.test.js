const { expect } = require('chai');
const verificaNumero = require('./verificaNumero');

const POSITIVO = 'positivo';
const NEGATIVO = 'negativo';
const NEUTRO = 'neutro';
const TYPE = 'string';

describe('Ao executar a função', () => {

  describe('o resultado', () => {
    it('é uma string', () => {
      const retornoFuncao = verificaNumero(45);
      expect(retornoFuncao).to.be.a(TYPE);
    });
    it('é "positivo" quando o número for maior 0', () => {
      const retornoFuncao = verificaNumero(1);
      expect(retornoFuncao).to.be.equals(POSITIVO);
    });

    it('é "negativo" quando o número for menor que 0', () => {
      const retornoFuncao = verificaNumero(-1);
      expect(retornoFuncao).to.be.equals(NEGATIVO);
    });

    it('é "neutro" quando o número for igual a 0', () => {
      const retornoFuncao = verificaNumero(0);
      expect(retornoFuncao).to.be.equals(NEUTRO);
    });
  });
});