import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetails from '../components/PokemonDetails';

class PokemonContainer extends Component{

constructor(props){
  super(props);
  this.state = {
    pokemons: [],
    selectedPokemon: null
  };
  this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
}

componentDidMount(){
  const url ="http://pokeapi.co/api/v2/pokemon/?limit=151"

  fetch(url)
  .then(res => res.json())
  .then(pokemons => this.setState({pokemons: pokemons.results}))
  .catch(err => console.error);
}

handlePokemonSelected(url){
  fetch(url)
  .then(res => res.json())
  .then(pokemon => this.setState({selectedPokemon: pokemon}))
}



render(){
  return(
  <div>
    <h2>Pokemon Container</h2>
    <PokemonSelector pokemons={this.state.pokemons} onPokemonSelected={this.handlePokemonSelected}/>
    <PokemonDetails pokemon={this.state.selectedPokemon}/>
  </div>
);
}

}
export default PokemonContainer;
