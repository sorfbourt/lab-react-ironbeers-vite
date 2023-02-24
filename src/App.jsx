import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import AllBeers from "./pages/AllBeers"
import NewBeer from "./pages/NewBeer"
import RandomBeers from "./pages/RandomBeers"
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<AllBeers/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/random-beer" element={<RandomBeers/>}/>

      </Routes>
    </div>
  )
}

export default App
