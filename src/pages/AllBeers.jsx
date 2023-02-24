import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function AllBeers({beers}) {

  const [search, setSearch] = useState("")

  const handleSearch = (event)=>{
    setSearch(event.target.value)
    console.log("search: ", search)

  }


  return (
    <div>
      <Header/>

      <form>
        <label>Search: <input type="text" onChange={(event)=>{handleSearch(event)}}></input></label>
      </form>
      <h1>All Beers</h1>

      {beers.filter(beer =>{
        if(search===""){
          return beer
        }
        if(beer.name.toLowerCase().includes(search.toLowerCase())){
          return beer
        }
      })
      .map((beer, index)=>{
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} width="30"></img>
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <b>Created by: </b>{beer.contributed_by}
          <p><Link to={`/beers/${beer._id}`}>View Beer</Link></p>
          <hr/> 
          
            </div>
          
        )
      })}
     
      
      
      
    </div>
  )
}

export default AllBeers