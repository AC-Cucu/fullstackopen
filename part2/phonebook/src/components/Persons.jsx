const Persons = ({ filteredPersons, deletePerson}) => {
    console.log('Persons component rendered with:', filteredPersons)

    if (filteredPersons.length === 0) {
      return <p>No results found</p>
    }
    return (
      <>
        {filteredPersons.map(person => 
          <li key={person.id}>
              {person.name} {person.number} <button onClick={() => deletePerson(person.id)}> delete </button>
          </li>
        )}      
      </>
    )
}

export default Persons