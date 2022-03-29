import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';

class Sidebar extends Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3> { category.name } </h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      { movie.title } was released in { movie.released }
                      <button type='button' onClick={ () => selectMovie(category, movie) }>
                        Assistir
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  categories: store.movieReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(movieAction(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
