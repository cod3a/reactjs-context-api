import React, { createContext, useState } from 'react';

export const NoteContext = createContext();

const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => setNotes([...notes, note]);
  const delNote = (id) => setNotes(notes.filter(n => n.id !== id));
  //const updateNote=(newNote) => ....
  return (
    <NoteContext.Provider value={{ notes, addNote, delNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
