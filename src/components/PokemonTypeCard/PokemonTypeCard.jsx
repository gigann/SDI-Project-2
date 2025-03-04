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
        <div className={data.data.name}>
            <img src={typeData['sprites']['generation-viii']['sword-shield']['name_icon']}/>
        </div>
    )
}

export default PokemonTypeCard


// < div className = 'pokemon-types-box' >
// {
//     typeList.map(pokemonType => {
//         // instantiate the type cards here
//         return <div key={typeList.indexOf(pokemonType)} className='pokemon-type-card'>{pokemonType.name}</div>;
//     })
// }
//         </div >