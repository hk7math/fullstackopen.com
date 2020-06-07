import React from 'react'

const Persons = ({ personsToShow, handleClick }) => 
  <div>
    {personsToShow.map( ({ name, number, id }) => 
      <div key={ name }>
        { name } { number } 
        <button onClick={ () => handleClick( id ) }>delete</button>
      </div>
    )}
  </div>

export default Persons