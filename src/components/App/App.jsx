import { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import PokemonContext from './PokemonContext.jsx'
import PokemonTypesContext from './PokemonTypesContext.jsx'

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
  const typeValue = { typeList, setTypeList }
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/')
      .then(res => res.json())
      .then(data => {
        let results = data.results;
        results = results.slice(0, -2);
        setTypeList(results);
      })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (!trimmedQuery) {
      setError("Enter a valid Pokémon name or ID");
      return;
    }
    setError("");
    navigate(`/pokemonDetails/${trimmedQuery}`);
  };


  return (
    <>
      <PokemonTypesContext.Provider value={typeValue}>
      <PokemonContext.Provider value={value}>
        <nav>
          <button onClick={() => navigate('/')}>Pokemon Types</button>
          <button onClick={() => navigate('/battle')}>Battle</button>
          <form id="search-form" onSubmit={handleSearch}>
            <input
              id="search-input"
              type="text"
              placeholder="Enter Pokemon Name or ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="25"
            />
            <button id="search-btn" type="submit">Pokemon Search</button>
          </form>
          {error && <p style={{ color: 'red', marginLeft: '10px', marginTop:'5px' }}>{error}</p>}
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
      </PokemonTypesContext.Provider>
    </>
  )
}
//<Route path='/'element= {wallets.map(wallet => <Home key={wallet.id} data={wallet}/>)} />
//<Route path='/id/:id'element={<Details key={wallets.id}/>} />
export default App
