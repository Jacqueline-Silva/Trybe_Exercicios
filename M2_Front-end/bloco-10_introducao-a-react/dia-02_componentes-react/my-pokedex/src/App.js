import React from 'react';
import pokemons from './data.js';
import PokeInfo from './Poke.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'> Pokedex </h1>
        <PokeInfo pokemons={pokemons} />
      </div>
    );
  }
  
}

export default App;
