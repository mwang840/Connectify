import React from 'react';
import './Profile.css';
import Name from './Name';
import Contact from './Contact';
import About from './About';
import EditProfileButton from './EditProfileButton';

// make this take an argument for the user id, then display that user's profile

function Profile(props: { user_id: string; serialized: []}) {
    return (
      <div className="profile">
        <header>
          <Name></Name>
        </header>
        <body>
        <Contact></Contact>
        <About user_id="0"></About>
        </body>
        <br></br>
        <br></br>
        <EditProfileButton />
        {/* <div> {serialized} </div> */}
      </div>
    );
  }
  
  export default Profile;