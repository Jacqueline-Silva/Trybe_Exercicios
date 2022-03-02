import React from 'react';
import States from './Estados';
import './index.css';

class Forms1 extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      cpf: '',
      email: '',
      address: '',
      city: '',
      stat: '',

    }
  }

  render() { 
    return (
      <form className='forms'>
        <fieldset className='forms__fieldset'>
          <legend>DADOS PESSOAIS</legend>
        
          <label for="name">Nome:
            <input type="text" id='name' maxLength='40' required></input>
          </label>

          <label for='cpf'>CPF:
            <input type="number" id='cpf' maxLength='11' required></input>
          </label>
         
          
          <label for='email'>Email:
            <input type="email" id='email' maxLength='50' required></input>
          </label>
          
          
          <label for='address'>Endereço:
            <input type="text" id='address' maxLength='200' required></input>
          </label>

          <label for='city'>Cidade:
            <input type="text" id='city' maxLength='28' required></input>
          </label>

          <label for='stat'>Estados:
            <select id='stat' required>
              <option>Selecione</option>
              <States />
            </select>
          </label>

          <label>Casa
            <input type='radio'></input>
          </label> 
          <label>Apartamento
            <input type='radio'></input>
          </label>

        </fieldset>
      </form>
    );
  }
}
 
export default Forms1;