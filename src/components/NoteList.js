import React, { useContext } from 'react';

import { NoteContext } from '../context/NoteContext';

import Note from './Note';

const NoteList = () => {
  const { notes } = useContext(NoteContext);
  const noteList = notes.map((n) => <Note key={n.id} note={n} />);

  return <>{noteList}</>;
};

export default NoteList;
