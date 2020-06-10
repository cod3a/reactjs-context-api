import React from 'react';

import DeleteNote from './DeleteNote'

const Note = ({note}) => {
  return ( <p><DeleteNote id={note.id}/>{note.content}</p> );
}
 
export default Note;