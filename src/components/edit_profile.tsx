import React from 'react';
import Name from './Name';
import Contact from './Contact';
import About from './About';
import data from './users.json';



function EditProfile() {
    return (
        // <p>edit profile screen</p>
      <div className="profile">
       <header>
       <Name></Name>
       </header>
       <body>
        <Contact></Contact>
        <About></About>
       </body>
       <br></br>
       <br></br>
      
      done button
      </div>
    )
}

export default EditProfile