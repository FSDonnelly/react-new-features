import React from 'react'

const Note = ({ note, removeNote }) => {
    return (
        <div>
            <li>{note.title}</li>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}

export { Note as default }