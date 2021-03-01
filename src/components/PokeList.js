import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemons);
    const item = this.props.pokemons.map((pokemonItem, id) => {
      return (
        <li key={pokemonItem.id}>
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
