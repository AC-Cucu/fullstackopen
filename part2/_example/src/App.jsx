import { useState } from "react"

import Note from "./components/Note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

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