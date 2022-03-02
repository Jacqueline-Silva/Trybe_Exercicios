import React, { Component } from 'react';


class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label> Nome: 
        <input 
          type='text' 
          name='nome'
          value={value}
          onChange={handleChange}
          required>
        </input>
        <span>{value.length > 40 ? 'Texto muito grande!' : ''}</span>
      </label>
    );
  }
}
 
export default Nome;