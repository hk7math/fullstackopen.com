import React from 'react'

const Country = ({ country }) => {
  const { name, capital, populations, languages, flag } = country
  return (
  <div>
    <h2>{ name }</h2>
    <div>capital { capital }</div>
    <div>population { populations }</div>
    <h3>languages</h3>
    <ul>
      { languages.map( language => <li>{ language.name }</li>) }
    </ul>
    <img src={flag} width="100" />
  </div>
)}

export default Country