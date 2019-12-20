import React from 'react';

const PokemonItem = (props) => {
  return <div>
    <img src={props.image} alt={props.name}/>
    <h3>{props.name}</h3>
    <ul>
      {props.typesArray.map((type, index) =>{
        return <li key={index}>
          {type}
        </li>
      })}
    </ul>
  </div>
}


export default PokemonItem;