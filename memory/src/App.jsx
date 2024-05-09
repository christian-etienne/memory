import React from 'react';
import { useState } from 'react';
import './App.css';
import logo from './assets/logocasino.png';
import MemoryGame from './components/Card';

function App() {
  

  return (
    <>
      <div className="background">
        <div className="App">
          <nav className="navbar">
            <img
              src={logo}
              alt="Logo"
              className="navbar-logo"
            />
          </nav>
        </div>
        <div>
          <MemoryGame />
        </div>
      </div>
    </>
  );
}

export default App;
