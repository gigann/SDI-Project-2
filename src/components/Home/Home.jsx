import { useState, useEffect, useContext } from 'react'

import './Home.css'

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
            <button>Reset</button>
            <div className = 'pokemon-types-box'>
                {typeList.map(pokemonType => {
                    // instantiate the type cards here
                    return <div key={typeList.indexOf(pokemonType)} className='pokemon-type-card'>{pokemonType.name}</div>;
                })}
            </div>
        </>
    )
}

export default Home