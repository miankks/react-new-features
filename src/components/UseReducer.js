import React, { useState, useEffect, useReducer } from 'react';
import { Container, Row, Col } from 'reactstrap';

const notesReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_NOTES':
          return action.notes;
      case 'ADD_NOTE':
          return [
            ...state,
            { title: action.title, body: action.body }
          ]
      case 'REMOVE_NOTE':
        return state.filter((note) => note.title !== action.title)
      default:
        return state;
    }
}

const UseReducer = () => {
  // const [notes, setNotes] = useState([]);
  // returns an array with two things on it (state and dispatch function)
  // state below can be named as notes or any and if multiple dispatches then dispatch can have suibale name 
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes})
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  const Box = props => <div className="box">{props.children} </div>;
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => ( 
          <Note key={note.title} note= {note} removeNote={removeNote}/>
        )
      )}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange= {(e) => setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
      <Container>
          <Row>
            <Col>
              col
            </Col>
          </Row>
          <Row>
            <Col xs="4">
             col 4
            </Col>

            <Col xs="4">
              col4
            </Col>
          </Row>

          <Row>
            <Col xs="6">
             col 6
            </Col>

            <Col xs="6">
              col 6
            </Col>
            <Col xs="6">
              col 6
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>.col </Box>
            </Col>
            <Col>
              <Box>.col </Box>
            </Col>
            <Col>
              <Box> .col </Box>
            </Col>
            <Col>
              <Box>.col </Box>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
            <Col xs="auto">
              <Box>.col-auto is used for dynamic content</Box>
            </Col>
            <Col xs="3">
              <Box> .col-3 </Box>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 4, order: 4, offset: 2 }}>
              <Box> .col-sm-4 .col-sm-order-4 .col-sm-offset-4 </Box>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Box> .col-sm-10 .col-md-4 .col-md-offset-5 </Box>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default UseReducer;

const Note = ({note, removeNote}) => {
  // cleaning effect
  useEffect(() => {
    console.log('Setting up effect!')
    // for cleansing and is same as componentDidUnmount
    return () => {
      console.log('Cleaning up effect!')
    }
  }, [])
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}