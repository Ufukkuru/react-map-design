import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket'
import Home from './Components/HomePage/Home'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </>
  )
}

export default App
