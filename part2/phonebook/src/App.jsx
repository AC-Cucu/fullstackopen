import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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