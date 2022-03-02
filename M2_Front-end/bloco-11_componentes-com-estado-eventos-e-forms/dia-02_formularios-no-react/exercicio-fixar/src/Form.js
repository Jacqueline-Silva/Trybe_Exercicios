import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };
  }


  handleChange({ target }) {
    let value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState = ({
      [target.name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            <textarea 
              name="estadoFavorito" 
              value={this.state.estadoFavorito} 
              onChange={this.handleChange} />
          </label>

          <label>Email:
            <input type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}></input>
          </label>

          <label>
            Nome:
            <input
              name='nome'
              type='text'
              value={this.state.nome}
              onChange={this.handleChange}></input>
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}></input>
          </label>

          <label>
            Vai comparecer?
            <input 
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}></input>
          </label>
          
          <label>
            Escolha sua palavra chave favorita:
              <select
                name='palavraChaveFavorita'
                value={this.state.palavraChaveFavorita}
                onChange={this.handleChange}>
              <option value='estado'>Estado</option>
              <option value='evento'>Evento</option>
              <option value='props'>Props</option>
              <option value='hooks'>Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;