import React, { Component } from 'react'
import { useResolvedPath } from 'react-router-dom';
import data from './users.json';
import pic from './profile-pictures/3f.jpg';

let name = data.users[0].name;
//import pfp from data.users[0].profile_picture;

function Name() {
        return (
            <section id="container-about" className="container-about">
                    <img className="profilepic" src={pic}
                        style={{
                            margin: 'auto',
                            borderColor: 'white',
                            // borderwidth: 5,
                            // width: 200,
                            // height: 200,
                        }}
                        alt="profilepic" />
                    <h1> {name} </h1>
                </section>
        )
    }

export default Name