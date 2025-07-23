const PersonForm  = ({ onSubmit, onNameChange, onNumberChange, newName, newNumber }) => {
    console.log('PersonForm component rendered with newName:', newName, 'and newNumber:', newNumber)
    return (
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm