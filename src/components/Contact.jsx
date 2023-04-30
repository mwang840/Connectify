import React, { Component } from 'react'
import data from './users.json';
import { serialized } from './About';

function Contact(props: { user_id: string; serialized: [];}) {
    let phone = serialized[props.user_id].phone_number;
    let email = serialized[props.user_id].email;
        return (
            <section id="container-about" className="container-about">
                <h3> Contact </h3>
                <p> {phone} </p>
                <p> {email} </p>
            </section>
        )
    }

export default Contact