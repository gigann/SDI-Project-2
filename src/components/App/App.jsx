import { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'
import Home from '../Home/Home.jsx'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
