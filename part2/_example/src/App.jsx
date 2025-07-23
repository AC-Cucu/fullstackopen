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
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }

    const newNotes = [...notes, noteObject]
    console.log('newNotes:', newNotes)

    setNotes(newNotes)
    setNewNote('')
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

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClickShowAll}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {
          notesToShow.map(note => 
            <Note key={note.id} note={note} />
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