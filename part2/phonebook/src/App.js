import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './services/phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  useEffect( () => {
    phonebook
      .getAll()
      .then( res => {
        setPersons( res )
      })
  },[])

  const addName = ( e ) => {
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