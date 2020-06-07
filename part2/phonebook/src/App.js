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
  
  const personsToShow = persons.filter( person =>
    person.name.toLowerCase().indexOf( search ) > -1
  )

  const addName = e => {
    e.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    const samePerson = persons.filter( person => person.name === name )
    if ( samePerson.length ){
      if ( window.confirm(`${ name } is already added to phonebook, replace the old number with a new one?`)) {
        const newPerson = { ...samePerson[0], number }
        phonebook
          .updatePerson( newPerson.id, newPerson)
          .then( resPerson => {
            setPersons( persons.map( person => 
              person.id !== resPerson.id
              ? person
              : resPerson
            ))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const newPerson = { name, number, id: persons.length + 1 }
      phonebook
        .addPerson( newPerson )
        .then( resPerson => {
          setPersons( persons.concat( resPerson ))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const delName = id => {
    if ( window.confirm(`Delete ${persons.find( person => person.id === id ).name}?`) ){
      phonebook
        .deletePerson( id )
        .then( res => {
          setPersons( persons.filter( person => person.id !== id ) )
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search = { search } setSearch = { setSearch }/>

      <h3>add a new</h3>
      <PersonForm 
        newName = { newName }
        setNewName = { setNewName }
        newNumber = { newNumber }
        setNewNumber = { setNewNumber }
        addName = { addName }
      />
      
      <h3>Numbers</h3>
      <Persons 
        personsToShow = { personsToShow } 
        handleClick = { delName }
      />
    </div>
  )
}

export default App