import React, { Component } from 'react'
import { useResolvedPath } from 'react-router-dom';
import data from './users.json';
import pic from './profile-pictures/3f.jpg';
import './name.css';

let name = data.users[0].name;
//import pfp from data.users[0].profile_picture;

function Name() {
        return (
            <section id="container-about" className="container-about">
                    <img id="profilepic" src={pic}
                        style={{
                            borderColor: 'white',
                            borderwidth: 5,
                            width: 200,
                            height: 200,
                            borderRadius: 200 / 2
                        }}
                        alt="profilepic" />
                    <h1> {name} </h1>
                </section>
        )
    }

export default Name