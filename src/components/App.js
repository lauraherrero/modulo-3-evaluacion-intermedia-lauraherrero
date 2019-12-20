import React from 'react';
import '../stylesheets/App.css';
import data from '../data/data';
import PokemonList from './PokemonList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonData: data
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Mi lista de pokemon</h1>
        <PokemonList items={this.state.pokemonData}/>
      </div>
    );
  }
}

export default App;
