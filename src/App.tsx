import React from 'react';
import Name from './components/Name'
import Contact from './components/Contact'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Name></Name>
      <Contact></Contact>
      <About></About>
      </header>
    </div>
  );
}

export default App;
