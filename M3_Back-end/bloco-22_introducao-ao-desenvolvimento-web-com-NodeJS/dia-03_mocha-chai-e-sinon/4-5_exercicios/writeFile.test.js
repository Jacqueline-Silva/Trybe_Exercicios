const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const whiteFile = require('./writeFile');

const OK = 'ok';

describe('Ao executar a função whiteFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns(OK);
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Passando dois parâmetros', () => {
    it('é uma string', () => {
      const response = whiteFile('nameArquivo.txt', 'Este é um arquivo txt');
      expect(response).to.be.a('string');
    });

    it('é igual a "ok" para sinalizar que deu certo', () => {
      const response = whiteFile('nameArquivo.txt', 'Este é um arquivo txt');
      expect(response).to.be.equals(OK);
    });
  });

  describe('Passando somente um dos parâmetros', () => {
    it('é retornado "undefined"', () => {
      const response = whiteFile('', 'Este é um arquivo txt');
      expect(response).to.be.undefined;
    });
  })
});