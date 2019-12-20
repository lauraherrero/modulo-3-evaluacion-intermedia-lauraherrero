import React from 'react';

const PokemonItem = (props) => {
  return <div>
    <img className="pokemonImage" src={props.image} alt={props.name}/>
    <h3 className="pokemonName">{props.name}</h3>
    <ul className="typeList">
      {props.typesArray.map((type, index) =>{
        return <li className="typeLi" key={index}>
          {type}
        </li>
      })}
    </ul>
  </div>
}


export default PokemonItem;