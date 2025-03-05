import { useState, useEffect, useContext } from 'react'

import './PokemonTypeList.css'
import PokemonCard from '../PokemonCard/PokemonCard.jsx'

import PokemonContext from '../App/PokemonContext.jsx';
import PokemonTypesContext from '../App/PokemonTypesContext.jsx';

import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx';

export default function PokemonTypeList() {
  const { details } = useContext(PokemonContext);
  const { pokemonTypes } = useContext(PokemonTypesContext);

  const [pokemonData, setPokemonData] = useState(details);

  const [pokemonTypeList, setPokemonTypeList] = useState(pokemonTypes);

  return (
    <>
      <h1>{pokemonData.name.toUpperCase()} TYPE POKEMON</h1>
      <PokemonTypeCard className='selected-type' key={pokemonData.name} data={{ name: pokemonData.name, url: `https://pokeapi.co/api/v2/type/${pokemonData.id}/` }}></PokemonTypeCard>

      <div className='pokemon-type-list'>
        {pokemonData.pokemon.map(pokemon =>
          <PokemonCard key={pokemon.name} data={pokemon}></PokemonCard>
        )}
      </div>
    </>
  )
}