import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

function BeerDetails() {
let {id} = useParams()
const [singleBeer, setSingleBeer] = useState({})

const fetchSingleBeerData = async () => {
  const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
  console.log("response", response)
  setSingleBeer(response.data)
}

useEffect(()=>{
  fetchSingleBeerData()

}, [])

useEffect(()=>{
  console.log("singleBeer: ", singleBeer)
}, [singleBeer])


  return (
    <div>
      <Header/>
      <h1>{singleBeer.name}</h1> 
            <img src={singleBeer.image_url} alt={singleBeer.name} width="30"></img>
          <h4>{singleBeer.tagline}</h4>
          <p><b>First Brewed: </b>{singleBeer.first_brewed}</p>
          <p><b>Attenuation Level: </b>{singleBeer.attenuation_level}</p>
          <p>{singleBeer.description}</p>
          <b>Created by: </b>{singleBeer.contributed_by}


    </div>
  )
}

export default BeerDetails