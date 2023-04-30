import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import EditProfile from './edit_profile';

function EditProfileButton() {
        return <Link to="/edit_profile" className="edit_profile_button">Edit Profile</Link>    
      }

export default EditProfileButton