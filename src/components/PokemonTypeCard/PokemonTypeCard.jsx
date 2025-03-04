import { useState, useEffect, useContext } from 'react'

import './PokemonTypeCard.css'
import { Shield } from '@mui/icons-material';

function PokemonTypeCard(data) {
    const [typeData, setTypeData]
        = useState({});

    useEffect(() => {
        fetch(data.data.url)
            .then(res => res.json())
            .then(data => {
                setTypeData(data)
            })
    }, [])


    return (
        <div className='pokemon-type-card'>
            <img src={typeData ?.['sprites']?.['generation-viii']?.['sword-shield']?.['name_icon']}/>
        </div>
    )
}

export default PokemonTypeCard

