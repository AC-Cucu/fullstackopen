import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const fetchPersons = () => {
    console.log('effect')
    personService
      .getAllPersons()
      .then(initialPersons => {
        console.log('promise fulfilled')
        const fetchedPersons = initialPersons
        setPersons(fetchedPersons)
      })
  }

  useEffect(fetchPersons, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      // id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    personService
      .createPerson(personObject)
      .then(returnedPerson => {
        console.log('person added:', returnedPerson )
        const addedPerson = returnedPerson

        const newPersons = [...persons, addedPerson]
        setPersons(newPersons)

        setNewName('')
        setNewNumber('')
        console.log('Updated persons:', newPersons)
      })
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

  const handlePersonDelete = (id) => {
    const personFound = filteredPersons.find(person => person.id === id)
    console.log("person found:", personFound)

    if (!personFound) return

    const confirmDelete = window.confirm(`Do you really want to delete ${personFound.name}`)

    if (!confirmDelete) return

    personService
      .deletePerson(id)
      .then(deletedPerson => {
          console.log(`${deletedPerson.name} was deleted sucessfully`)
          const updatedPersons = filteredPersons.filter(n => n.id !== id)
          setPersons(updatedPersons)
      })
      .catch(error => {
        console.error(`Error deleting person: ${error}`)
      })
  }

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

      <Persons filteredPersons={filteredPersons} deletePerson={handlePersonDelete} />
    </div>
  )
}

export default App