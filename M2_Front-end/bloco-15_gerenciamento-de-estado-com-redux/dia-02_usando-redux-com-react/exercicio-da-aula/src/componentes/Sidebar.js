import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    const { categories } = this.props;
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
                      <button type='button' onClick={ () => {} }>
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

export default Sidebar;
