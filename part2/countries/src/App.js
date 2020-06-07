import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( res => {
        setCountries( res.data )
      })
  }, [] )

  const countriesMatch = countries && countries.filter( country => 
    country.name.toLowerCase().indexOf( search ) > -1
  )
  console.log( countriesMatch )

  return (
    <>
      <div>
        find countries <input value={ search } onChange={ e => setSearch( e.target.value ) }></input>
      </div>
      <div>
        { 
          countriesMatch.length > 10
            ? "Too many matches, specify another filter"
            : countriesMatch.length > 1
            ? countriesMatch.map( country => <div key={ country.alpha2Code }> { country.name } </div> )
            : countriesMatch[0] && <Country country={countriesMatch[0]} />
        }
      </div>
    </>
  )
}
export default App