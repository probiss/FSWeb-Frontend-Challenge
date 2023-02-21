import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
          <Navbar />
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
    </div>
  );
}

export default App;
