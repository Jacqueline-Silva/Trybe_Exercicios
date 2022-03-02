import React from 'react';
import Forms1 from './Forms1';
import Forms2 from './Forms2';
import './index.css';

class Forms extends React.Component {
  render() { 
    return (
      <form className='forms'>
        <Forms1 />
        <Forms2 />
      </form>
    );
  }
}
 
export default Forms;