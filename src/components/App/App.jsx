import { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import PokemonContext from './PokemonContext.jsx'

import Home from '../Home/Home.jsx'
import Battle from '../Battle/Battle.jsx'
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx'
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList.jsx'
import TypeDetails from '../TypeDetails/TypeDetails.jsx'

function App() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({})
  const value = { details, setDetails }
  const [typeList, setTypeList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/')
      .then(res => res.json())
      .then(data => {
        let results = data.results;
        results = results.slice(0, -2);
        setTypeList(results);
      })
  }, [])

  return (
    <>
      <PokemonContext.Provider value={value}>
        <nav>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/battle')}>Battle</button>
          {/* <button onClick={() => navigate('/pokemonDetails')}>Pokemon Details</button> */}
          {/* <button onClick={() => navigate('/pokemonTypeList')}>Pokemon Type List</button> */}
          {/* <button onClick={() => navigate('/typeDetails')}>Type Details</button> */}
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/battle' element={<Battle />} />
          <Route path='/pokemonTypeList' element={<PokemonTypeList />} />
          <Route path={`/pokemonDetails/:name`} element={<PokemonDetails />} />
          <Route path={`/typeDetails/:id`} element={<TypeDetails />} />
        </Routes>
      </PokemonContext.Provider>
    </>
  )
}
//<Route path='/'element= {wallets.map(wallet => <Home key={wallet.id} data={wallet}/>)} />
//<Route path='/id/:id'element={<Details key={wallets.id}/>} />
export default App
