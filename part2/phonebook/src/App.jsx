import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const fetchPersons = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        const fetchedPersons = response.data
        setPersons(fetchedPersons)
      })
  }

  useEffect(fetchPersons, [])
  console.log('render', persons.length, 'persons')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersons = [...persons, personObject]
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
    // Debugging logs
    console.log('Added person:', personObject)
    console.log('Updated persons:', newPersons)
  }

  const handleNameChange = (event) => {
    const newNameFromInput = event.target.value
    console.log('name changed', newNameFromInput)
    setNewName(newNameFromInput)
  }

  const handleNumberChange = (event) => {
    const newNumberFromInput = event.target.value
    console.log('number changed', newNumberFromInput)
    setNewNumber(newNumberFromInput)
  }

  const handleFilterChange = (event) => {
    const newFilterFromInput = event.target.value
    console.log('filter changed', newFilterFromInput)
    setNewFilter(newFilterFromInput)
  }

  const filteredPersons = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <h3>Add a new person</h3>

      <PersonForm 
        onSubmit={addPerson} 
        newName={newName} 
        newNumber={newNumber}
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} 
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App