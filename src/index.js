// File: src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'rsuite/dist/rsuite.min.css'; // Import RSuite styles

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
