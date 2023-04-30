import React, { Component } from 'react'
import { useResolvedPath } from 'react-router-dom';
import pic0 from './profile-pictures/0f.jpg';
import pic1 from './profile-pictures/0m.jpg';
import pic2 from './profile-pictures/1f.jpg';
import pic3 from './profile-pictures/1m.jpg';
import pic4 from './profile-pictures/2f.jpg';
import pic5 from './profile-pictures/2m.jpg';
import pic6 from './profile-pictures/3f.jpg';
import pic7 from './profile-pictures/3m.jpg';
import pic8 from './profile-pictures/4f.jpg';
import pic9 from './profile-pictures/4m.jpg';
import { serialized } from './About';

//import pfp from data.users[0].profile_picture;

function Name(props: { user_id: string; serialized: [];}) {
    let name = serialized[props.user_id].name;
    let pfp = [];
    if (props.user_id == 0) {
        pfp.push(
            <img className="profilepic" src={pic0} alt="0"></img>
        )
    }
    if (props.user_id == 1) {
        pfp.push(
            <img className="profilepic" src={pic1} alt="1"></img>
        )
    }
    if (props.user_id == 2) {
        pfp.push(
            <img className="profilepic" src={pic2} alt="2"></img>
        )
    }
    if (props.user_id == 3) {
        pfp.push(
            <img className="profilepic" src={pic3} alt="3"></img>
        )
    }
    if (props.user_id == 4) {
        pfp.push(
            <img className="profilepic" src={pic4} alt="4"></img>
        )
    }
    if (props.user_id == 5) {
        pfp.push(
            <img className="profilepic" src={pic5} alt="5"></img>
        )
      }
    if (props.user_id == 6) {
        pfp.push(
            <img className="profilepic" src={pic6} alt="6"></img>
        )
    }
    if (props.user_id == 7) {
        pfp.push(
            <img className="profilepic" src={pic7} alt="7"></img>
        )
    }
    if (props.user_id == 8) {
        pfp.push(
            <img className="profilepic" src={pic8} alt="8"></img>
        )
        }
    if (props.user_id == 9) {
        pfp.push(
            <img className="profilepic" src={pic9} alt="9"></img>
        )
    }
        return (
            <section id="container-about" className="container-about">
                    {pfp}
                    <h1> {name} </h1>
                </section>
        )
    }

export default Name