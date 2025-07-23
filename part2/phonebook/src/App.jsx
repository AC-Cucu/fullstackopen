import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
       id: 1,
       name: 'Arto Hellas' 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName
    }

    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersons = [...persons, personObject]
    setPersons(newPersons)
    setNewName('')
    // Debugging logs
    console.log('Added person:', personObject)
    console.log('Updated persons:', newPersons)
  }

  const handleNameChange = (event) => {
    const newNameFromInput = event.target.value
    console.log('name changed', newNameFromInput)
    setNewName(newNameFromInput)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <li key={person.id}>{person.name}</li>
      )}
    </div>
  )
}

export default App