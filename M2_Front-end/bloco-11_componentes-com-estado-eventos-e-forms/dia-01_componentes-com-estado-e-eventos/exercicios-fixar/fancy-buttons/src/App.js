import React from 'react';
import './index.css';


class App extends React.Component {
  constructor() {
    super()

    this.left = this.left.bind(this);
    this.center = this.center.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    console.log(this)
    console.log('Clicou no botão da esquerda')
  }


  right() {
    console.log(this)
    console.log('Clicou no botão da direita')
  }


  center() {
    console.log(this)
    console.log('Clicou no botão do centro')
  }

  render() { 
    return (
      <>
        <div>
          <button className='btn left' onClick={this.left}>Esquerda</button>
          <button className='btn center' onClick={this.center}>Principal</button>
          <button className='btn right' onClick={this.right}>Direita</button>
        </div>
        <div>
          Olhe o console!
        </div>
      </>
    );
  }
}
 
export default App;