import './App.css';
import React from 'react';

const compromissos = ['Encontro', 'Ir a padaria', 'Ir ao mercado', 'Jogar JustDance', 'Estudar React', 'Não esquecer de comer e beber água'];


const Task = (value) => {
  value = compromissos;
  let arr = value.map((e) => 
    <li className='test'>{e}</li>)
  return (
    arr
  )
}

function App() {
  return (<Task/>);
}

export default App;
