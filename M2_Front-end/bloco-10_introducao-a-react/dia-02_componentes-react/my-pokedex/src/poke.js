import pokemons from "./data.js";
import React from 'react';
import PropTypes from "react";

class PokeInfo extends React.Component {
  render() {
    const pokes = pokemons;
    pokes.map((e,index) => {
      return (
        <div>
          <p> name={e.nome}{} </p>
        </div>
      )
    })

    return (
      <div>
        <pokes/>
      </div>
    )
  }
};

PokeInfo.PropTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: {
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
  },
  image: PropTypes.string,
};

export default PokeInfo;