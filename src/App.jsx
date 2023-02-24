import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import AllBeers from "./components/AllBeers"
import NewBeer from "./components/NewBeer"
import RandomBeers from "./components/RandomBeers"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Hi</h1>
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
