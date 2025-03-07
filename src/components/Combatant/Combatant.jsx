import './Combatant.css'

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

export default function Combatant({ player, pokemonData }) {

    // const hp = pokemonData.stats[0]?.base_stat;
    // const currentHP = hp;
    // const attack = pokemonData.stats[1]?.base_stat;
    // const defense = pokemonData.stats[2]?.base_stat;
    // const spAtk = pokemonData.stats[3]?.base_stat;
    // const spDef = pokemonData.stats[4]?.base_stat;
    // const speed = pokemonData.stats[5]?.base_stat;

    // function takeTurn() {
    //     console.log(`${pokemonData.name} did something`);
    // };

    return (
        <>
            {(player === 'one') ? (
                <div>
                    <p>{pokemonData?.name}</p>
                    {/* <p>{currentHP}/{hp} HP</p> */}
                    <img className='idle-front' src={pokemonData?.sprites?.other?.showdown?.front_default} />
                </div>
            ) : (
                <div>
                    <img className='idle-back' src={pokemonData?.sprites?.other?.showdown?.back_default} />
                    <p>{pokemonData?.name}</p>
                    {/* <p>{currentHP}/{hp} HP</p> */}
                </div>
            )}
        </>
    )
}