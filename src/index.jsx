import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import PersonalNoteApp from './components/PersonalNoteApp';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNoteApp/>);