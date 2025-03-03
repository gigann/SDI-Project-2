import { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'
import Home from '../Home/Home.jsx'
import Battle from '../Battle/Battle.jsx'
import PokemonDetails from '../PokemonDetails/PokemonDetails.jsx'
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList.jsx'
import TypeDetails from '../TypeDetails/TypeDetails.jsx'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/battle' element={<Battle/>}/>
        <Route path='/pokemonDetails' element={<PokemonDetails/>}/>
        <Route path='/pokemonTypeList' element={<PokemonTypeList/>}/>
        <Route path='/typeDetails' element={<TypeDetails/>}/>
      </Routes>
    </>
  )
}

export default App
