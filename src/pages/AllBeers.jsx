import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function AllBeers({beers}) {
  return (
    <div>
      <Header/>
      <h1>All Beers</h1>

      {beers.map((beer, index)=>{
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