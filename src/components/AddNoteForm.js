import React, { useContext, useState } from 'react';
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button >Submit</button>
            </form>
        </div>
    )
}

export { AddNoteForm as default }