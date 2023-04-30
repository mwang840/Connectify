import React from 'react';
import './Profile.css';
import Name from './Name';
import Contact from './Contact';
import About, { serialized } from './About';
import EditProfileButton from './EditProfileButton';
import { UserProfile } from './user_profile';

// make this take an argument for the user id, then display that user's profile

function Profile(props: { user_id: string; serialized: []}) {
    return (
      <div className="profile">
        <header>
          <Name user_id={props.user_id} serialized={ serialized }></Name>
        </header>
        <body>
        <Contact user_id={props.user_id} serialized={ serialized }></Contact>
        <About user_id={props.user_id}></About>
        </body>
        <br></br>
        <br></br>
        <EditProfileButton />
        <br></br>
        <br></br>
        <UserProfile user_id={props.user_id} serialized={props.serialized}></UserProfile>
        {/* <div> {serialized} </div> */}
      </div>
    );
  }
  
  export default Profile;