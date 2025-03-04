import './TypeDetails.css'
import '../PokemonTypeCard/PokemonTypeCard.css'


import PokemonContext from '../App/PokemonContext.jsx';
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

export default function TypeDetails(pokemonType) {
  const { id } = useParams();
  const { details } = useContext(PokemonContext);
  const [pokemonData, setPokemonData] = useState(details);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [id]);

  // const [shouldReload, setShouldReload] = useState(false);

  // useEffect(() =>
  //   {
  //     if (shouldReload) {
  //         window.location.reload(); // This reloads the entire page.
  //     }
  // }, [shouldReload]);

  return (
    <>
      <h1>TypeDetails</h1>

      <div className='type-details-box'>

        <div className='type-details'>Strong Against
          <div>
            <p>double damage to</p>
            {pokemonData.damage_relations.double_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
          <div>
            <p>half damage from</p>
            {pokemonData.damage_relations.half_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
          <div>
            <p>no damage from</p>
            {pokemonData.damage_relations.no_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
        </div>
        <div className='type-details'>Neutral Against

        </div>
        <div className='type-details'>Weak Against
          <div>
            <p>double damage from</p>
            {pokemonData.damage_relations.double_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
          <div>
            <p>half damage to</p>
            {pokemonData.damage_relations.half_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
          <div>
            <p>no damage to</p>
            {pokemonData.damage_relations.no_damage_to.map(pokemonType =>
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