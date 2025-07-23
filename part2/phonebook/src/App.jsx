import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

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
      name: newName,
      number: newNumber
    }

    const personFound = persons.find(person => person.name === newName)

    if (personFound) {
      const confirmUpdate = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
      if (!confirmUpdate) return

      const personId = personFound.id;
      personService
        .updatePerson(personId, personObject)
        .then(returnedPerson => {
          const updatedPerson = returnedPerson 

          const newMessage = {
            text: `Updated the number of ${updatedPerson.name}`,
            type: 'success'
          }
          setMessage(newMessage)

          const newPersons = persons.map(person => person.id !== personId ? person : updatedPerson)
          setPersons(newPersons)

          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      
      return
    }

    personService
      .createPerson(personObject)
      .then(returnedPerson => {
        const addedPerson = returnedPerson
        const newMessage = {
          text: `${addedPerson.name} was added to the phonebook`,
          type: 'success'
        }
        setMessage(newMessage)

        const newPersons = [...persons, addedPerson]
        setPersons(newPersons)

        setNewName('')
        setNewNumber('')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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

      <Notification message={message} />

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