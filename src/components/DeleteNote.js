import React, { useContext } from 'react';

import { NoteContext } from '../context/NoteContext';

const DeleteNote = ({ id }) => {
  const { delNote } = useContext(NoteContext);
  return <button onClick={() => delNote(id)}>x</button>;
};

export default DeleteNote;
