import "../stylesheets/App.css";
import data from "../data/data.json";
import PokeList from "./PokeList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }

  render() {
    return (
      <>
        <header className="header">
          <h1 classNAme="title">Mi lista de Pokemon</h1>
        </header>
        <main className="main">
          <div className="container">
            <PokeList pokemons={this.state.pokemons} />
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
