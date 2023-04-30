import React from 'react';
import Name from './components/Name'
import Contact from './components/Contact'
import About from './components/About'
import './App.css';
import HelloWorld from './components/hello_world'
import Home from './components/home'
import { ViewNavbar } from './components/ViewNavbar'

// import Welcome from './components/value-prop';


function App() {
  return (
    <div className="Value-propositions">
      < ViewNavbar />
      <Home />
    </div>
    // <div>
    // </div>
  );
}

export default App;
