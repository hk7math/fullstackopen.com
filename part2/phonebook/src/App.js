import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

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

  const personsToShow = persons.filter( person =>
    person.name.toLowerCase().indexOf(search) > -1
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      <h2>add a new</h2>
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
      {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App