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
        <div className="page">
          <header className="header"></header>
          <main className="main">
            <h1 className="title">Mi lista de Pokemon</h1>
            <div className="container">
              <PokeList pokemons={this.state.pokemons} />
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
