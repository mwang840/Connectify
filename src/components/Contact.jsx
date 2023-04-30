import React, { Component } from 'react'
import data from './users.json';

let phone = data.users[0].phone_number;
let email = data.users[0].email;

class Contact extends Component {
    render() {
        return (
            <section id="container-contact" className="container-contact">
            <h3> Contact </h3>
            <p> {phone} </p>
            <p> {email} </p>
            </section>
        )
    }
}

export default Contact