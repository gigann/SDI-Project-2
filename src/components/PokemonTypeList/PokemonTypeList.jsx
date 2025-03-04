import { useState, useEffect, useContext } from 'react'

import './PokemonTypeList.css'
import PokemonCard from '../PokemonCard/PokemonCard.jsx'

import PokemonContext from '../App/PokemonContext.jsx';

export default function PokemonTypeList() {
  const {details} = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState(details);

  return (
    <>
      <h1>PokemonTypeList</h1>

      <div className='pokemon-type-list'>
        {pokemonData.pokemon.map(pokemon =>
          <PokemonCard key={pokemon.name} data={pokemon}></PokemonCard>
        )}
      </div>
    </>
  )
}