import './index.css'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };

    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  async fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(url);
    const data =  await response.json();
    this.setState({
      characters: data.results,
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {
            characters.map(({ name, image }) => {
              return (
                <div className="container" key={ name }>
                  <h3>{ name }</h3>
                  <img src={ image } alt={ name} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App