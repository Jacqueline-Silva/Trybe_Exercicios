import React from 'react';

const compromissos = ['Encontro', 'Ir a padaria', 'Ir ao mercado', 'Jogar JustDance', 'Estudar React', 'Não esquecer de comer e beber água'];

const Task = (value) => {
  value = compromissos;
  return (
    value.map((e, index) => <li className='test' key={index}>{e}</li>)
  )
}

function App() {
  return (<Task />);
}

export default App;
