import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Navbar from './Components/Navbar'
import BasketData from './Components/BasketData'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<BasketData/>}/>
      </Routes>
    </>
  )
}

export default App
