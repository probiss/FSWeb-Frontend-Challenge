import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Header />
          <Skills />
          <Profile />
    </div>
  );
}

export default App;
