import React from 'react';
import './index.css';

class Forms2 extends React.Component {
  render() { 
    return (
        <fieldset className='forms__fieldset'>
          <legend>ÚLTIMO EMPREGO</legend>

          <label>Resumo do curriculo:
            <textarea maxLength='1000' required></textarea>
          </label>

          <label>Cargo:
            <textarea maxLength='40' required></textarea>
          </label>

          <label> Descrição do cargo
            <textarea maxLength='500' required></textarea>
          </label>
          
        </fieldset>
    );
  }
}
 
export default Forms2;