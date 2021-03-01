import React from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const itemPokemon = props.pokemonsProp.types.map((type, id) => {
    return <li key={id}>{type}</li>;
  });
  return (
    <article className="pokemon-container">
      <div>
        <img src={props.pokemonsProp.url} />
      </div>
      <h4>{props.pokemonsProp.name}</h4>
      <ul>{itemPokemon}</ul>
    </article>
  );
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};
export default Pokemon;
