import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'

function RandomBeers() {

  const [randomBeer, setRandomBeer] = useState({})

const fetchRandomBeerData = async () => {
  const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
  console.log("response", response)
  setRandomBeer(response.data)
}

useEffect(()=>{
  fetchRandomBeerData()

}, [])

useEffect(()=>{
  console.log("randomBeer: ", randomBeer)
}, [randomBeer])


  return (
    <div>
      <Header/>
      
      <h1>{randomBeer.name} </h1> 
            <img src={randomBeer.image_url} alt={randomBeer.name} width="30"></img>
          <h4>{randomBeer.tagline}</h4>
          <p><b>First Brewed: </b>{randomBeer.first_brewed}</p>
          <p><b>Attenuation Level: </b>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <b>Created by: </b>{randomBeer.contributed_by}
      
      </div>
  )
}

export default RandomBeers