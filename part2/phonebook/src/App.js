import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter search = {search} setSearch = {setSearch}/>
      <h3>add a new</h3>
      <PersonForm 
        newName = {newName}
        setNewName = {setNewName}
        newNumber = {newNumber}
        setNewNumber = {setNewNumber}
        addName = {addName}
      />
      <h3>Numbers</h3>
      <Persons personsToShow = {personsToShow} />
    </div>
  )
}

export default App