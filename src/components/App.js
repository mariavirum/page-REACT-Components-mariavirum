import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import pokemonsData from "../data/data.json";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <h1 classNAme="title">Mi lista de Pokemon</h1>
        </header>
        <main className="main">
          <div className="container">
            <PokeList pokemonsData={pokemonsData} />
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}
export default App;
