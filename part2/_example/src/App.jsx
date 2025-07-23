import { useState, useEffect } from "react"
import axios from "axios"
import Note from "./components/Note"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    // Fetch notes from the server
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        const notes = response.data
        setNotes(notes)
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      // id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log('note added:', response.data)
        const addedNote = response.data

        const newNotes = [...notes, addedNote]
        console.log('newNotes:', newNotes)

        setNotes(newNotes)
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {    
    const newNoteFromInput = event.target.value
    console.log('note changed', newNoteFromInput)
    setNewNote(newNoteFromInput)
  }
  

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  console.log('notesToShow:', notesToShow)

  const handleClickShowAll = () => {
    setShowAll(!showAll)
  }

  const toggleImportantceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)

    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios
      .put(url, changedNote)
      .then(response => {
        const updatedNote = response.data

        const newNotes = notes.map(note => note.id !== id ? note : updatedNote)
        setNotes(newNotes)
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClickShowAll}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {
          notesToShow.map(note => 
            <Note 
              key={note.id} 
              note={note} 
              toggleImportance={() => toggleImportantceOf(note.id)} 
            />
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input name="note" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App