import React from 'react';

const PokemonDetails = (props) => {

  if(props.pokemon){

  return(
    <div>
      <h3>{props.pokemon.name}</h3>
      <img src={props.pokemon.sprites.front_shiny} height="200"/>

    </div>
  )
}
return null;
}

export default PokemonDetails;
