
// Ao chamar a função doingThings:

const despertador = () => 'Acordando!!'

const lembreteManha = () => 'Bora tomar café!!'

const soneca = () => 'Partiu dormir!!'

const doingThings = (par) => {
  const resultado = par;
  return resultado
}
console.log(doingThings(soneca()));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!