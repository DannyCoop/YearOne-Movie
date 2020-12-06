import React from 'react'
import './App.css';
import {BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
