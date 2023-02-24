import { useEffect, useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import AllBeers from "./pages/AllBeers"
import NewBeer from "./pages/NewBeer"
import RandomBeers from "./pages/RandomBeers"
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import BeerDetails from './pages/BeerDetails'



function App() {
  const [beers, setBeers] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    //console.log("response", response)
    setBeers(response.data)
  }
  
  
  useEffect (()=>{
    fetchData()
  }, [])


  useEffect (()=>{
    console.log("beers when beers state changes", beers)
  }, [beers])

  const [search, setSearch] = useState("")

  const handleSearch = (event)=>{
    setSearch(event.target.value)
    console.log("search: ", search)

  }


  const fetchSearchData = async () => {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
    console.log("search response", response.data)
    setBeers(response.data)
  }

  useEffect (()=>{
    fetchSearchData()
  }, [search])




  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<AllBeers beers={beers} handleSearch={handleSearch}/>}/>
        <Route path='beers/:id' element={<BeerDetails beers={beers}/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/random-beer" element={<RandomBeers/>}/>

      </Routes>
    </div>
  )
}

export default App
