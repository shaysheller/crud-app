import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, Links,
} from 'react-router-dom';
import App from './components/App.jsx';
import './styles.css';
// ? we can update this to rely on React 18
// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
