import React from 'react';
import './Profile.css'
import Name from './Name';
import Contact from './Contact';
import About from './About';

function Profile() {
    return (
      <div className="profile">
       <header>
       <Name></Name>
       </header>
       <body>
        <Contact></Contact>
        <About></About>
       </body>
      </div>
    );
  }
  
  export default Profile;