import { useState, useEffect, useContext } from 'react'

import './PokemonTypeList.css'
import PokemonCard from '../PokemonCard/PokemonCard.jsx'

import PokemonContext from '../App/PokemonContext.jsx';
import PokemonTypesContext from '../App/PokemonTypesContext.jsx';

export default function PokemonTypeList() {
  const { details } = useContext(PokemonContext);
  const { pokemonTypes } = useContext(PokemonTypesContext);

  const [pokemonData, setPokemonData] = useState(details);

  const [pokemonTypeList, setPokemonTypeList] = useState(pokemonTypes);

  return (
    <>
      <h1>{pokemonData?.name ? pokemonData.name.toUpperCase() : "Loading..."}</h1> {/* ✅ Added fallback text to prevent errors */}

      <div className='pokemon-type-list'>
        {pokemonData?.pokemon?.length > 0 ? (
          pokemonData.pokemon.map(pokemon =>
            <PokemonCard key={pokemon.name} data={pokemon}></PokemonCard>
          )
        ) : (
          <p>No Pokémon available.</p>
        )}
      </div>
    </>
  )
}