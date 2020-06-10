import React, {useContext} from 'react';

import {NoteContext} from '../context/NoteContext'

const Header = () => {
  const {notes} = useContext(NoteContext);
return ( <h2>Welcome to Invernalia, you have {notes.length} notes.</h2> );
}
 
export default Header;