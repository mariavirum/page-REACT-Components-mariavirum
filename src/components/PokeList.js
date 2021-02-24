import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemonsData);
    const item = this.props.pokemonsData.map((pokemonItem, id) => {
      return (
        <li key={id}>
          <Pokemon pokemonsProp={pokemonItem} />
        </li>
      );
    });
    return (
      <>
        <ul className="pokemon-List">{item}</ul>
      </>
    );
  }
}
export default PokeList;
