
// 7 -------------------------------------------------------------
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500)
};

it('Verifica se a função uppercase retorna todas as letras maiusculas', (done) => {
  uppercase('testa função uppercase', (str) => {
    try {
      expect(str).toBe('TESTA FUNÇÃO UPPERCASE');
      done()
    } catch (mensagemError) {
      done(mensagemError);
    }
  })
})

// npm test exercicio_7