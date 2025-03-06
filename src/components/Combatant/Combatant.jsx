import './Combatant.css'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

export default function Combatant({ player, pokemonData }) {
    return (
        <>


            {(player === 'one') ? (
                <div>
                    <p>{pokemonData.name}</p>
                    <img src={pokemonData?.sprites?.other?.showdown?.front_default} />
                </div>
            ) : (
                <div>
                    <img src={pokemonData?.sprites?.other?.showdown?.back_default} />
                    <p>{pokemonData.name}</p>
                </div>
            )}
        </>
    )
}