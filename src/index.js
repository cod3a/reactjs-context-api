import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoteProvider from './context/NoteContext';

ReactDOM.render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
