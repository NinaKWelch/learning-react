import React from 'react'

const NoteForm = ({ handleNote, newNote }) => {
  return (
    <form onSubmit={handleNote}>
      <input {...newNote}
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default NoteForm
