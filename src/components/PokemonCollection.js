import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList}) {

  const pokemonRender = pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  ));

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      <br/>
      {pokemonRender}
    </Card.Group>
  );
}

export default PokemonCollection;
