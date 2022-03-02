import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((e) => (
          <div className="card">
            <p>{`O conteúdo é: ${e.conteudo}`}</p>
            <p>{`Status atual: ${e.status}`}</p>
            <p>{`Bloco: ${e.bloco}`}</p>
          </div>
        ))}
      </div>
    )
  }
} 

export default Content;