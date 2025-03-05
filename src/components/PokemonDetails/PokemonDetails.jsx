import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './PokemonDetails.css'
import '../TypeDetails/TypeDetails.css'
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard';

export default function PokemonDetails() {
  const name = useParams();

  const [pokemonInfo, setPokemonInfo] = useState('');
  const [damageRelations, setDamageRelations] = useState('');
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);
  const [noDamageTo, setNoDamageTo] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);

  const [defensiveTypes, setDefensiveTypes] = useState([]);
  // each element in defensiveTypes is a type name and the damage multiplier (x1, x2, x0.25, x4, or x0)
  // 1. populate defensiveTypes with each type name (normal, rock, steel, etc.) and set the damage multiplier to 1.
  // 2. loop through type 1 damage relations
  //   a.) for double_damage_from, multiply damage multiplier by 2.
  //   b.) for half_damage_from, multiply damage multiplier by 1/2.
  //   c.) for no_damage_from, multiply damage multiplier by 0.
  // 3. loop through type 2 damage relations (if applicable)
  //   a.) for double_damage_from, multiply damage multiplier by 2.
  //   b.) for half_damage_from, multiply damage multiplier by 1/2.
  //   c.) for no_damage_from, multiply damage multiplier by 0.

  // 4. for displaying, loop through defensiveTypes
  //   a.) if multiplier is x2 or x4, put type card in weak against
  //   b.) if multiplier is x1/2 or x0, put type card in strong against
  //   c.) if multiplier is x1, put type card in neutral

  useEffect(() => {
    if (true) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name.name}`)
        .then((res) => res.json())
        .then((data) => setPokemonInfo(data))
        .catch((error) =>
          console.error("Error fetching pokemon info:", error)
        );
    }
  }, [pokemonInfo]);

  // useEffect(() => {
  //   if (pokemonInfo.types && pokemonInfo.types.length > 0) {
  //     const typeUrls = pokemonInfo.types.map((t) => t.type.url);
  //     Promise.all(
  //       typeUrls.map((url) =>
  //         fetch(url).then((res) => res.json())
  //       )
  //     )
  //       .then((results) => {
  //         const drArray = results.map((result) => result.damage_relations);
  //         setDamageRelations(drArray);
  //       })
  //       .then(() => {

  //       })
  //       .catch((error) =>
  //         console.error("Error fetching damage relations:", error)
  //       );
  //   }
  // }, [pokemonInfo]);

  useEffect(() => {
    if (pokemonInfo?.types?.length > 0) {
      const typeUrls = pokemonInfo.types.map((t) => t.type.url);

      Promise.all(typeUrls.map((url) => fetch(url).then((res) => res.json())))
        .then((results) => {
          const damageRelationsArray = results.map((result) => result.damage_relations);
          setDamageRelations(damageRelationsArray);

          setDoubleDamageFrom(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.double_damage_from.map((d) => d))));
          setDoubleDamageTo(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.double_damage_to.map((d) => d))));
          setHalfDamageFrom(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.half_damage_from.map((d) => d))));
          setHalfDamageTo(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.half_damage_to.map((d) => d))));
          setNoDamageTo(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.no_damage_to.map((d) => d))));
          setNoDamageFrom(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.no_damage_from.map((d) => d))));
        })
        .catch((error) => console.error("Error fetching damage relations:", error));
    }
  }, [pokemonInfo]);

  const removeDuplicates = (inputArray) => {
    let removedDuplicates = [...new Set(inputArray)];
    return removedDuplicates;
  }

  return (
    <>
      <h1>{pokemonInfo.name?.toUpperCase()}</h1>
      <div className='details-container'>

        <h2>Pokemon Information</h2>
        <div className='pokemon-information'>
          <div className="pokemon-image">
            <img src={pokemonInfo.sprites?.other.showdown.front_default} alt={pokemonInfo.name} />
          </div>
          <div className="physical-stats">
            <h3>Physical Stats</h3>
            <p>ID: {pokemonInfo.id}</p>
            <p>Height: {pokemonInfo.height / 10} m </p>
            <p>Weight: {pokemonInfo.weight / 10} kg </p>
            <h3>Type</h3>
            {pokemonInfo.types?.map(t =>
              <PokemonTypeCard data={t.type}></PokemonTypeCard>
            )}
          </div>

          <div className="pokemon-base-stats">
            <h3>Base Stats</h3>
            {pokemonInfo.stats ? (
              <>
                <p> HP: {pokemonInfo.stats[0]?.base_stat}</p>
                <p> Attack: {pokemonInfo.stats[1]?.base_stat} </p>
                <p> Defense: {pokemonInfo.stats[2]?.base_stat} </p>
                <p> Special Attack: {pokemonInfo.stats[3]?.base_stat}</p>
                <p> Special Defense: {pokemonInfo.stats[4]?.base_stat}</p>
                <p> Speed: {pokemonInfo.stats[5]?.base_stat}</p>
              </>
            ) : "None"}
          </div>
        </div>

        <h2>Type Comparison</h2>
        <div className='damage-relations'>
          <div className='strong-col'>
            <h3>Strong Against</h3>
            <div className='strong-against-types'>
              {/* <h4>Double Damage To</h4> */}
              <div className='double-damage-to'>
                <div>
                  {doubleDamageTo.length > 0 ? <p>DEALS SUPER-EFFECTIVE DAMAGE TO</p> : <></>}
                  {doubleDamageTo.length ? doubleDamageTo?.map(type => <PokemonTypeCard data={type}></PokemonTypeCard>) : "None"}
                </div>
              </div>
            </div>
          </div>
          <div className='weak-col'>
            <h3>Weak Against</h3>
            <div className='half-damage-to'>
              <div>
                {halfDamageTo.length > 0 ? <p>DEALS NOT VERY EFFECTIVE DAMAGE TO</p> : <></>}
                {halfDamageTo.length ? halfDamageTo?.map(type => <PokemonTypeCard data={type}></PokemonTypeCard>) : <></>}
              </div>
              <div>
                <div className='no-damage-to'>
                {noDamageTo.length > 0 ? <p>HAS NO EFFECT ON</p> : <></>}
                {noDamageTo.length ? noDamageTo?.map(type => <PokemonTypeCard data={type}></PokemonTypeCard>) : <></>}
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}