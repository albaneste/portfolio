import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="about-skills-container">
          <About />
          <Skills />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;