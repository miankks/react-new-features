import React, { useState, useEffect } from 'react';

const NoteApp = () => {

    const notesData = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
  })
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => ( 
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
        )
      )}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange= {(e) => setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
    </div>
  )
}

export default NoteApp;
// const App = (props) => {
//   // const array = useState(10)
//   // not recommended to store all state on a single object
//   const [state, setState] = useState({
//     count: props.count,
//     text: ''
//   });

//   return (
//     <div>
//       <p>The current {state.text || 'count'} is {state.count}</p>
//       <button onClick={() => setState({...state, count: state.count + 1})}>+1</button>
//       <button onClick={() => setState({...state, count: props.count})}>Reset</button>
//       <button onClick={() => setState({...state, count: state.count -1})}>-1</button>
//       <input value={state.text} onChange={(e) => setState({...state, text: e.target.value})}/>
//     </div>
//   )
// }