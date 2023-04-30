import React from 'react';
import Name from './Name';
import Contact from './Contact';
// import About from './About';
import FormAbout from './FormAbout';

function EditProfile() {
    return (
        // <p>edit profile screen</p>
      <div className="profile">
       <header>
       <Name></Name>
       </header>
       <body>
        <Contact></Contact>
        <FormAbout user_id="0"></FormAbout>
       </body>
       <br></br>
       <br></br>
      
      done button
      </div>
    )
}

export default EditProfile