import React from 'react'
import { connect } from 'react-redux';

const Player = ({ selectedCategory, selectedMovie }) => {
  return (
    <div>
      <h2>{selectedCategory.name}</h2>
      <h3>{selectedMovie.title}</h3>
    </div>
  )
}

const mapStateToProps = (store) => ({
  selectedCategory: store.movieReducer.selectedCategory,
  selectedMovie: store.movieReducer.selectedMovie,
});

export default connect(mapStateToProps, null)(Player);