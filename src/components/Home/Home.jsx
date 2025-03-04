import { useState, useEffect, useContext } from 'react'

import './Home.css'
import PokemonTypeCard from '../PokemonTypeCard/PokemonTypeCard.jsx'

function Home() {
    const [typeList, setTypeList] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(res => res.json())
            .then(data => {
                setTypeList(data.results)
            })
    }, [])

    return (
        <>
            {/* <button>Reset</button> */}
            <div className = 'pokemon-types-box'>
                {typeList.map(pokemonType => <PokemonTypeCard data={pokemonType} key={typeList.indexOf(pokemonType)}></PokemonTypeCard>
                )}
            </div>
        </>
    )
}

export default Home

