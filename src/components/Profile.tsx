import React from 'react';
import './Profile.css';
import Name from './Name';
import Contact from './Contact';
import About from './About';
import EditProfileButton from './EditProfileButton';

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
       <br></br>
       <br></br>
       <EditProfileButton />
      </div>
    );
  }
  
  export default Profile;