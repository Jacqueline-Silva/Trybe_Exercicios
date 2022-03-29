import React, { Component } from 'react'
import Player from "./componentes/Player";
import Sidebar from "./componentes/Sidebar";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>ReduxFlix</h1>
        <main>
          <Sidebar />
          <Player />
        </main>
      </div>
    )
  }
}

export default App
