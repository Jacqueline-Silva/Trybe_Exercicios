
const {
  sum,
  myRemove,
} = require ('./script.js');

// 1
describe('Função de soma', () => {

  test('A soma de 4 e 5 seja 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('A soma de 0 e 0 seja 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('A soma de 4 e "5" resulte em erro', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  test('Testa se mensagem de erro "parameters must be numbers" aparece', () => {
    expect(() => sum(4, '5')).toThrow(Error('parameters must be numbers'))
  });

});


// 2 
describe('Função recebe array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });

});
