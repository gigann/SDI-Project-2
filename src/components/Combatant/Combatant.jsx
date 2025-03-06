import './Combatant.css'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

export default function Combatant(pokemonData) {
    const [pokemon, setPokemon] = useState(pokemonData);

    return (
        <>
            {pokemon ? (
                <div>{pokemon.pokemonData.name}</div>
                /* <img src={pokemon.pokemonData.sprites.front_default} /> */
            ): (
                <div>loading</div>
            )}
        </>
    )
}
