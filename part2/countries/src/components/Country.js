import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ weather }) => {
  const { temperature, weather_icons, weather_descriptions, wind_speed, wind_dir} = weather
  return (
  <>
    <div><b>temperature: </b>{ temperature } Celcius</div>
    <img src={ weather_icons[0] } alt={ weather_descriptions[0] } />
    <div><b>wind: </b>{ `${ wind_speed } mph direction ${ wind_dir }`}</div>
  </>
)}

const Country = ({ country }) => {
  const { name, capital, populations, languages, flag } = country
  const api_key = process.env.REACT_APP_API_KEY
  
  const [ weather, setWeather ] = useState({})
  const [ loading, setLoading ] = useState( true )
  
  useEffect( () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${ api_key }&query=${ capital }`)
      .then( res => {
        setWeather( res.data.current )
        setLoading( false )
      })
  }, [ api_key, capital ] )

  return (
  <div>
    <h2>{ name }</h2>
    <div>capital { capital }</div>
    <div>population { populations }</div>
    <h3>languages</h3>
    <ul>
      { languages.map( ({ name }) => <li key={ name }>{ name }</li>) }
    </ul>
    <img src={ flag } width="100" alt={ name }/>
    <h3>Weather in { capital }</h3>
    {
      loading
      ? "..."
      : <Weather weather={weather} />
    }
  </div>
)}

export default Country