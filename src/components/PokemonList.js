import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = (props) => {
  return <ul>
    {props.items.map((item, index) => {
      return <li key={index}>
        <PokemonItem
          image={item.url}
          name={item.name}
          typesArray={item.types}/>
      </li>
    })}
  </ul>
}

export default PokemonList;