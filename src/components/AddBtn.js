import React, { useContext } from 'react';

import { NoteContext } from '../context/NoteContext';

const AddBtn = () => {
  const { addNote } = useContext(NoteContext);
  const generateId = () => new Date().getMilliseconds().toString();

  const add = () => {
    const id = generateId();
    const content = `this is my content with id: ${id}`;
    const note = { id, content };
    addNote(note);
  };
  return <button onClick={add}>Add Note</button>;
};

export default AddBtn;
