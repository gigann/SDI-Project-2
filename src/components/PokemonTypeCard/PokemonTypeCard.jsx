import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import { useState, useEffect, useContext } from 'react'

import PokemonContext from '../App/PokemonContext.jsx';

import './PokemonTypeCard.css'
import { Shield } from '@mui/icons-material';

function PokemonTypeCard(data) {
    const navigate = useNavigate();

    const [typeData, setTypeData]
        = useState({});

    const { details, setDetails } = useContext(PokemonContext);

    useEffect(() => {
        fetch(data.data.url)
            .then(res => res.json())
            .then(data => {
                setTypeData(data)
            })
    }, [])


    return (
        <div className='pokemon-type-card'>
            <img src={typeData?.['sprites']?.['generation-viii']?.['sword-shield']?.['name_icon']} />

            <div>
                <button onClick={() => {
                    setDetails(typeData);
                    navigate('/pokemonTypeList');
                }}>
                    Pokemon
                </button>
                <button>
                    Details
                </button>
            </div>
        </div>
    )
}

export default PokemonTypeCard
