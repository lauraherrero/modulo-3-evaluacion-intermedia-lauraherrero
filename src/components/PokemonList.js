import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = (props) => {
  return <ul className="pokemonList">
    {props.items.map((item, index) => {
      return <li className="pokemonLi" key={item.id}>
        <PokemonItem
          image={item.url}
          name={item.name}
          typesArray={item.types}/>
      </li>
    })}
  </ul>
}

export default PokemonList;