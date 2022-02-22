import React from 'react';
import './index.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clickLeft: 0,
      clickCenter: 0,
      clickRight: 0
    }

    this.left = this.left.bind(this);
    this.center = this.center.bind(this);
    this.right = this.right.bind(this);
    this.reset = this.reset.bind(this);
  }

  
  left() {
    this.setState((numAnterior, _props) => ({
      clickLeft: numAnterior.clickLeft + 1
    }))

    console.log('Clicou no botão da esquerda');
  }

  right() {
    this.setState((numAnterior, _props) => ({
      clickRight: numAnterior.clickRight + 1
    }))
    console.log('Clicou no botão da direita');
  }

  center() {
    this.setState((numAnterior, _props) => ({
      clickCenter: numAnterior.clickCenter + 1
    }))
    console.log('Clicou no botão do centro');
  }

  reset() {
    this.setState((cliques, _props) => ({
      clickLeft: 0,
      clickCenter: 0,
      clickRight: 0,
    }))
  }

  render() {  
    return (
      <>
        <div className='divParent'>

          <div className={this.state.clickLeft % 2 === 0 
              ? "divParent_btn--green" 
              : ""}>
            <p className='divParent-p__even'>
              {this.state.clickLeft % 2 === 0 ? "Par!" : "Ímpar"}
            </p>
            <p className='divParent__p--font'>
              {this.state.clickLeft}
            </p>
            <button className='btn' onClick={this.left}>Esquerda</button>
          </div>

          <div className={this.state.clickCenter % 2 === 0 
              ? "divParent_btn--green" 
              : ""}>
            <p className='divParent-p__even'>
              {this.state.clickCenter % 2 === 0 ? "Par!" : "Ímpar"}
            </p>
            <p className='divParent__p--font'>
              {this.state.clickCenter}
            </p>
            <button className='btn' onClick={this.center}>Principal</button>
          </div>

          <div className={this.state.clickRight % 2 === 0 
              ? "divParent_btn--green" 
              : ""}>
            <p className='divParent-p__even'>
              {this.state.clickRight % 2 === 0 ? "Par!" : "Ímpar"}
            </p>
            <p className='divParent__p--font'>
              {this.state.clickRight}
            </p>
            <button className='btn' onClick={this.right}>Direita</button>
          </div>

        </div>
        <div>
          <button className='btn reset' onClick={this.reset}>Resetar Cliques</button>
        </div>
        <div>
          Olhe o console!
        </div>
      </>
    );
  }
}
 
export default App;