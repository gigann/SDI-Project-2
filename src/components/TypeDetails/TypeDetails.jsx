import './TypeDetails.css'
import '../PokemonTypeCard/PokemonTypeCard.css'


import PokemonContext from '../App/PokemonContext.jsx';
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList.jsx';

export default function TypeDetails(pokemonType) {
  const { id } = useParams();
  const { details } = useContext(PokemonContext);
  const [pokemonTypeData, setPokemonTypeData] = useState(details);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(res => res.json())
      .then(data => setPokemonTypeData(data))
  }, [id]);

  return (
    <>
      <div className='pokemon-type-row'>
        <h1 className='type-label'>{pokemonTypeData.name}</h1>
        {/* <PokemonTypeList/> */}
      </div>

      <div className='pokemon-type-effectiveness-cols'>
        <div className='strong-col'>
          <h2>Strong vs.</h2>
          <div className='double-damage-to'>
            <p>Deals x2 damage to:</p>
            {pokemonTypeData.damage_relations.double_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='half-damage-from'>
            <p>Takes 1/2x damage from:</p>
            {pokemonTypeData.damage_relations.half_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='no-damage-from'>
            <p>Takes 0x damage from:</p>
            {pokemonTypeData.damage_relations.no_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
        </div>

        <div className='neutral-col'>
          <h2>Neutral vs.</h2>
          <div className='neutral-damage-to'>
            <p>Deals 1x damage to:</p>
          </div>
          <div className='neutral-damage-from'>
            <p>Takes 1x damage from:</p>
          </div>
        </div>

        <div className='weak-col'>
          <h2>Weak vs.</h2>
          <div className='double-damage-from'>
            <p>Takes x2 damage from:</p>
            {pokemonTypeData.damage_relations.double_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='half-damage-to'>
            <p>Deals 1/2x damage to:</p>
            {pokemonTypeData.damage_relations.half_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='no-damage-to'>
            <p>Deals 0x damage to</p>
            {pokemonTypeData.damage_relations.no_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
        </div>
      </div>
    </>
  )
}



// double_damage_from
// double_damage_to
// half_damage_from
// half_damage_to
// no_damage_from
// no_damage_to