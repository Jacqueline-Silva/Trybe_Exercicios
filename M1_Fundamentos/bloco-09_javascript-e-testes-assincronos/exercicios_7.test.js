// 7 -------------------------------------------------------------
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Verifica se a função uppercase retorna string com letras maiusculas', (done) => {
  uppercase('frase de teste', (str) => {
    try {
      expect(str).toBe('FRASE DE TESTE');
      done()
    } catch (error) {
      done(error)
    }
  })
})