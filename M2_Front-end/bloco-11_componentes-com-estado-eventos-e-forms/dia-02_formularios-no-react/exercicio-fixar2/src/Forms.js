import React, { Component } from 'react';
import Email from './Email';
import Nome from './Nome';
import './index.css'

class Forms extends Component {
  constructor() {
    super() 

    this.state = {
      nome: '',
      email: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const value = target.name === 'nome' ? target.value.toUpperCase() : target.value;

    this.setState ({
      [target.name]: value,
    });
  }
  
  render() { 
    return (
      <form>
        <fieldset>
          <legend>Formulário</legend>
          <Nome value={this.state.nome} handleChange={this.handleChange} />
          <Email value={this.state.email} handleChange={this.handleChange} />
        </fieldset>
      </form>
    );
  }
}
 
export default Forms;