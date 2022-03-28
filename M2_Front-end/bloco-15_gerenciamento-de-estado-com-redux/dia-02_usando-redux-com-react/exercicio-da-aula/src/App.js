import React, { Component } from 'react'
import { categories } from "./data";
import Player from "./componentes/Player";
import Sidebar from "./componentes/Sidebar";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories],
    }
  }
  render() {
    return (
      <div>
        <h1>ReduxFlix</h1>
        <main>
          <Sidebar categories={this.state.categories}/>
          <Player />
        </main>
      </div>
    )
  }
}

export default App
