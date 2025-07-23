import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }

    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersons = [...persons, personObject]
    setPersons(newPersons)
    setNewName('')
    setNewPhone('')
    // Debugging logs
    console.log('Added person:', personObject)
    console.log('Updated persons:', newPersons)
  }

  const handleNameChange = (event) => {
    const newNameFromInput = event.target.value
    console.log('name changed', newNameFromInput)
    setNewName(newNameFromInput)
  }

  const handlePhoneChange = (event) => {
    const newPhoneFromInput = event.target.value
    console.log('phone changed', newPhoneFromInput)
    setNewPhone(newPhoneFromInput)
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
      <div>
        <p>Filter shown with: <input value={newFilter} onChange={handleFilterChange} /></p>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person => 
        <li key={person.id}>{person.name} {person.number}</li>
      )}
    </div>
  )
}

export default App