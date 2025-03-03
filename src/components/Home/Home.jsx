import { useState, useEffect, useContext } from 'react'

import './Home.css'

function Home() {
    const [typeList, setTypeList] = useState([])
    const typeImgList = [];

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
                    return <img key={typeList.indexOf(pokemonType)} className='pokemon-type-card' alt={pokemonType.name} src={typeImgList[typeList.indexOf(pokemonType)]}></img>;
                })}
            </div>
        </>
    )
}

export default Home