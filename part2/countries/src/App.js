import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ show, setShow ] = useState({})
  const [ match, setMatch ] = useState([])

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => {
        setCountries( res.data )
        setMatch( res.data )
      })
  }, [] )

  const handleChange = e => {
    const countriesMatch = countries.filter( country => 
      country.name.toLowerCase().indexOf( e.target.value ) > -1
    )
    setSearch( e.target.value )
    setMatch( countriesMatch )
    if (countriesMatch.length === 1) {
      setShow( countriesMatch[0] )
    } else {
      setShow( [] )
    }
  }

  return (
    <>
      <div>
        find countries <input value={ search } onChange={ handleChange }></input>
      </div>
      <div>
        { 
          match.length > 10 
            ? "Too many matches, specify another filter"
            : match.length > 1 && match.map( country => 
              <div key={ country.alpha2Code }>
                { country.name } 
                <button onClick={ e => setShow( country )} >show</button>
              </div> )
            
        }
      </div>
      { show.name &&  <Country country={show} /> }
    </>
  )
}
export default App