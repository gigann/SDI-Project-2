import './TypeDetails.css'
import '../PokemonTypeCard/PokemonTypeCard.css'


import PokemonContext from '../App/PokemonContext.jsx';
import PokemonTypesContext from '../App/PokemonTypesContext.jsx';
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

export default function TypeDetails(pokemonType) {
  const { id } = useParams();
  const { details } = useContext(PokemonContext);
  const [pokemonTypeData, setPokemonTypeData] = useState(details);

  const typeDetails = useContext(PokemonTypesContext);

  const [neutralDamageTypes, setNeutralDamageTypes] = useState([]);

  // const [neutralDamageTypes, setNeutralDamageTypes] = useState([]);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${id}/`)
      .then(res => res.json())
      .then(data => {
        setPokemonTypeData(data);

        // damage relations
        let damageRelationsList = [];
        for (let key in data.damage_relations) {
          for (let damageType of data.damage_relations[key]) {
            damageRelationsList.push(damageType);
          }
        }
        // if a damage type does not exist in the damage relations, put it in the neutral damage type list
        setNeutralDamageTypes(typeDetails.typeList.filter(possibllyNeutralType => damageRelationsList.every(excludedType => possibllyNeutralType.name !== excludedType.name)));
      })
  }, [id]);

  return (
    <>
      <div className='pokemon-type-row'>
        <h1 className='type-label'>TYPE EFFECTIVENESS</h1>
        <PokemonTypeCard className = 'selected-type' key={id} data={{ name: pokemonTypeData.name, url: `https://pokeapi.co/api/v2/type/${id}/`}}></PokemonTypeCard>
      </div>

      <div className='pokemon-type-effectiveness-cols'>
        <div className='strong-col'>
          <div className='double-damage-to'>
            {pokemonTypeData.damage_relations?.double_damage_to.length > 0 ? <p>DEALS SUPER-EFFECTIVE DAMAGE TO</p> : <></>}
            {pokemonTypeData.damage_relations?.double_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='half-damage-from'>
            {pokemonTypeData.damage_relations?.half_damage_from.length > 0 ? <p>TAKES NOT VERY EFFECTIVE DAMAGE FROM</p> : <></>}
            {pokemonTypeData.damage_relations?.half_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='no-damage-from'>
            {pokemonTypeData.damage_relations?.no_damage_from.length > 0 ? <p>NOT AFFECTED BY</p> : <></>}
            {pokemonTypeData.damage_relations?.no_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
        </div>

        <div className='weak-col'>
          <div className='double-damage-from'>
            {pokemonTypeData.damage_relations?.double_damage_from.length > 0 ? <p>TAKES SUPER-EFFECTVE DAMAGE FROM</p> : <></>}
            {pokemonTypeData.damage_relations?.double_damage_from.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='half-damage-to'>
            {pokemonTypeData.damage_relations?.half_damage_to.length > 0 ? <p>DEALS NOT VERY EFFECTIVE DAMAGE TO</p> : <></>}
            {pokemonTypeData.damage_relations?.half_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>

          <div className='no-damage-to'>
            {pokemonTypeData.damage_relations?.no_damage_to.length > 0 ? <p>HAS NO EFFECT ON</p> : <></>}
            {pokemonTypeData.damage_relations?.no_damage_to.map(pokemonType =>
              <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
            )}
          </div>
        </div>
      </div>

      <div className='neutral-col'>
        <div className='neutral-damage'>
          <p>NORMAL EFFECTIVENESS</p>
          {neutralDamageTypes.map(pokemonType =>
            <PokemonTypeCard key={pokemonType.name} data={pokemonType}></PokemonTypeCard>
          )}
          {/* Filter the context provider list by strong vs. and weak vs.
            then do map on filtered results to make type cards //const filteredList = list1.filter(item => list2.includes(item));

            */}
          {/* {pokemonTypeList.value.typeList.filter(pokemonType => !pokemonTypeData.damage_relations[0].includes(pokemonType))} */}

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


// if type isn't in double_damage_from, half_damage_from, or no_damage_from, put it in neutral_damage_from

// if type isn't in double_damage_to, half_damage_to, or no_damage_to, put it in neutral_damage_to

//const filteredList = list1.filter(item => !list2.includes(item));

// const App = () => {
//   const isLoggedIn = true;
//   return (
//     <div>
//       {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
    {/* </div>
  );
 */}
