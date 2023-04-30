import React from 'react';
import Name from './Name';
import Contact from './Contact';
// import About from './About';
import FormAbout from './FormAbout';
import { serialized } from './About';

function EditProfile() {
    return (
        // <p>edit profile screen</p>
      <div className="profile">
       <header>
       <Name user_id="0" serialized={ serialized }></Name>
       </header>
       <body>
        <Contact user_id="0" serialized={ serialized }></Contact>
        <FormAbout user_id="0"></FormAbout>
       </body>
       <br></br>
       <br></br>
      
      done button
      </div>
    )
}

export default EditProfile