import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ 
    name: 'Arto Hellas',
    number: '040-1234567'
  }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    if ( persons.filter( person => person.name === name).length ){
      alert(`${name} is already added to phonebook`)
    } else {
      const newPerson = { name, number }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App