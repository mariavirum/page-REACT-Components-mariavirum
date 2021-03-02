import React from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  const itemPokemon = props.pokemonsProp.types.map((type, id) => {
    return (
      <li className="typeitems" key={id}>
        {type}
      </li>
    );
  });
  return (
    <article className="pokemon-container">
      <div>
        <img className="imageCard" src={props.pokemonsProp.url} />
      </div>
      <h4 className="titlecard">{props.pokemonsProp.name}</h4>
      <ul className="typelist">{itemPokemon}</ul>
    </article>
  );
}

Pokemon.propTypes = {
  pokemonsProp: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Pokemon;
