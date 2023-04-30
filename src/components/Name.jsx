import React, { Component } from 'react'
import { useResolvedPath } from 'react-router-dom';
import pic from './profile-pictures/3f.jpg';
import { serialized } from './About';

//import pfp from data.users[0].profile_picture;

function Name(props: { user_id: string; serialized: [];}) {
    let name = serialized[props.user_id].name;
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