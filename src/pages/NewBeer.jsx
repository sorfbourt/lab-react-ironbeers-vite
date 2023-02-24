import axios from 'axios'
import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function NewBeer() {
const navigate = useNavigate()

const [name, setName ] = useState('')
const [tagline, setTagline] = useState('')
const [description, setDescription] = useState('')
const [firstBrewed, setFirstBrewed] = useState('')
const [brewersTips, setBrewerTips] = useState('')
const [attenuation_level, setAttenuationLevel] = useState(0)
const [contributed_by, setContributedBy] = useState('')

const handleSubmit = async (event) =>{
  event.preventDefault()
  const newBeer = {name, tagline, description, firstBrewed, brewersTips, attenuation_level, contributed_by}
  console.log(newBeer)
  const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
  console.log("submit")


  setName('')
  setTagline('')
  setDescription('')
  setFirstBrewed('')
  setBrewerTips('')
  setAttenuationLevel(0)
  setContributedBy('')

  navigate('/beers')
}


  return (
    <div>
      
      <Header/>
      <h1>Create a New Beer</h1>

      <form style={{display: "flex", flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label>Name: <input type="text" onChange={event => setName(event.target.value)}></input></label>
        <label>Tagline: <input type="text" onChange={event => setTagline(event.target.value)}></input></label>
        <label>Description: <input type="text" onChange={event => setDescription(event.target.value)}></input></label>
        <label>First Brewed: <input type="text" onChange={event => setFirstBrewed(event.target.value)}></input></label>
        <label>Brewers Tips: <input type="text" onChange={event => setBrewerTips(event.target.value)}></input></label>
        <label>Attenuation Level: <input type="number" onChange={event => setAttenuationLevel(event.target.value)}></input></label>
        <label>Contributed By: <input type="text" onChange={event => setContributedBy(event.target.value)}></input></label>
        <button type="submit">Submit New Beer</button>
      </form>
      
      
      </div>
  )
}

export default NewBeer