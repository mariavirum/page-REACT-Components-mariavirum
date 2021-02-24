import React from "react";

function Pokemon(props) {
  const itemPokemon = props.pokemonsProp.types.map((type, id) => {
    return <li key={id}>{type}</li>;
  });
  return (
    <article>
      <div>
        <img src={props.pokemonsProp.url} />
      </div>
      <h4>{props.pokemonsProp.name}</h4>
      <ul>{itemPokemon}</ul>
    </article>
  );
}
export default Pokemon;
