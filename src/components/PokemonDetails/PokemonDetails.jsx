import { useState, useEffect } from 'react'
import './PokemonDetails.css'

export default function PokemonDetails() {
  const [pokemonInfo, setPokemonInfo] = useState('');
  const [damageRelations, setDamageRelations] = useState('');
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [halfDamageTo, setHalfDamageTo] = useState([]);

  useEffect(() => {
    if (true) {
      fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((res) => res.json())
        .then((data) => setPokemonInfo(data))
        .catch((error) =>
          console.error("Error fetching pokemon info:", error)
        );
    }
  }, []);

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

          setDoubleDamageFrom(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.double_damage_from.map((d) => d.name))));

          setDoubleDamageTo(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.double_damage_to.map((d) => d.name))));

          setHalfDamageFrom(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.half_damage_from.map((d) => d.name))));

          setHalfDamageTo(removeDuplicates(damageRelationsArray.flatMap((dr) => dr.half_damage_to.map((d) => d.name))));

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

        <div className='pokemon-information'>
          <div className="pokemon-image">
              <img src={pokemonInfo.sprites?.other.showdown.front_default} alt={pokemonInfo.name} />
            </div>
          <div className="physical-stats">
            <h3>Physical Stats</h3>
            <p>ID: {pokemonInfo.id}</p>
            <p>Height: {pokemonInfo.height / 10} m </p>
            <p>Weight: {pokemonInfo.weight / 10} kg </p>
            <p>Type: {pokemonInfo.types?.map((t) => t.type.name).join(", ")}</p>
          </div>

          <div className="pokemon-base-stats">
            <h3>Base Stats</h3>
            {pokemonInfo.stats ? (
              <>
                <p> HP: {pokemonInfo.stats[0]?.base_stat }</p>
                <p> Attack: {pokemonInfo.stats[1]?.base_stat } </p>
                <p> Defense: {pokemonInfo.stats[2]?.base_stat } </p>
                <p> Special Attack: {pokemonInfo.stats[3]?.base_stat }</p>
                <p> Special Defense: {pokemonInfo.stats[4]?.base_stat }</p>
                <p> Speed: {pokemonInfo.stats[5]?.base_stat }</p>
              </>
            ) : "None"}
          </div>
        </div>


        <div className='damage-relations'>
          <div className='strong-against'>
            <h3>Double Damage To</h3>
            <p>{doubleDamageTo.length ? doubleDamageTo.join(", ") : "None"}</p>
            <h3>Half Damage From</h3>
            <p>{halfDamageFrom.length ? halfDamageFrom.join(", ") : "None"}</p>
          </div>
          <div className='neutral-against'>
            <h3>Neutral</h3>
            <p>something something</p>
          </div>
          <div className='weak-against'>
              <h3>Half Damage To</h3>
              <p>{halfDamageTo.length ? halfDamageTo.join(", ") : "None"}</p>
              <h3>Double Damage From</h3>
              <p>{doubleDamageFrom.length ? doubleDamageFrom.join(", ") : "None"}</p>
          </div>
        </div>

        {/* <div className="damage-relations">
        {damageRelations.length > 0 ? (
          damageRelations.map((dr, index) => (
            <div key={index} className="damage-relations-type">
              <h2>Damage Relations for {pokemonInfo.types[index].type.name}</h2>
              <p>
                <strong>Double Damage From:</strong>{" "}
                {dr.double_damage_from.map((d) => d.name).join(", ")}
              </p>
              <p>
                <strong>Double Damage To:</strong>{" "}
                {dr.double_damage_to.map((d) => d.name).join(", ")}
              </p>
              <p>
                <strong>Half Damage From:</strong>{" "}
                {dr.half_damage_from.map((d) => d.name).join(", ")}
              </p>
              <p>
                <strong>Half Damage To:</strong>{" "}
                {dr.half_damage_to.map((d) => d.name).join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p>Loading damage relations...</p>
        )}
      </div> */}

      </div>


    </>
  )
}