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

  useEffect(() => {
    if (pokemonInfo.types && pokemonInfo.types.length > 0) {
      const typeUrls = pokemonInfo.types.map((t) => t.type.url);
      Promise.all(
        typeUrls.map((url) =>
          fetch(url).then((res) => res.json())
        )
      )
        .then((results) => {
          const drArray = results.map((result) => result.damage_relations);
          setDamageRelations(drArray);
        })
        .then(() => {

        })
        .catch((error) =>
          console.error("Error fetching damage relations:", error)
        );
    }
  }, [pokemonInfo]);

  return (
    <>
      <h1>PokemonDetails</h1>
      <div className='details-container'>

        <div className='pokemon-information'>
          <div className="physical-stats">
            <p>ID: {pokemonInfo.id}</p>
            <p>Height:{pokemonInfo.height} </p>
            <p>Weight: {pokemonInfo.weight} </p>
            <p>Type: {pokemonInfo.types?.map((t) => t.type.name).join(", ")}</p>
          </div>
        </div>

        <div className='damage-relations'>
          <div className='strong-against'>
            <h3>Double Damage To</h3>
            <p>something something</p>
            <h3>Half Damage From</h3>
            <p>something something</p>
          </div>
          <div className='neutral-against'>
            <h3>Neutral</h3>
            <p>something something</p>
          </div>
          <div className='weak-against'>
              <h3>Half Damage To</h3>
              <p>something something</p>
              <h3>Double Damage From</h3>
              <p>something something</p>
          </div>
        </div>

        <div className="damage-relations">
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
      </div>

      </div>


    </>
  )
}