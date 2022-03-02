import React, { Component } from 'react';
import './index.css'

class Email extends Component {
  render() { 
    const { value, handleChange } = this.props;
    return (
      <label> Email: 
        <input 
          type='email' 
          name='email'
          value={value}
          onChange={handleChange}
          required
          className={value.length > 50 ? 'error12' : ''}>
        </input>
        <span>{value.length > 50 ? 'Texto muito grande!' : ''}</span>
      </label>
    );
  }
}
 
export default Email;