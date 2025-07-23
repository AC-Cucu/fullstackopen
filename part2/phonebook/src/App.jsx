import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      phone: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <li key={person.id}>{person.name} {person.phone}</li>
      )}
    </div>
  )
}

export default App