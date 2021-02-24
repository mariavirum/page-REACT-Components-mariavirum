import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import pokemonsData from "../data/data.json";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Mi lista de Pokemon</h1>
        </header>
        <main>
          <div>
            <PokeList pokemonsData={pokemonsData} />
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}
export default App;
