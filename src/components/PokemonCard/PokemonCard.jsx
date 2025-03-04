import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import { useState, useEffect, useContext } from 'react'

import './PokemonCard.css'
import { Shield } from '@mui/icons-material';

export default function PokemonCard(data) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(data.data.pokemon.url)
            .then(res => res.json())
            .then(poke => {
                setPokemon(poke)
        })
    }, [])


    return (
        (pokemon?.sprites?.other?.showdown?.front_default)? (
            <div className='pokemon-card'>
                <img src={pokemon?.sprites?.other?.showdown?.front_default ?? pokemon?.sprites?.front_default}/>
                <p>{pokemon?.name}</p>
            </div>
        ):
            (
                <></>
         )
        // <div className='pokemon-card'>
        //     <img src={pokemon?.sprites?.other?.showdown?.front_default ?? pokemon?.sprites?.front_default}/>
        //     <p>{pokemon?.name}</p>
        // </div>
    )
}

