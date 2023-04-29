import React, { Component } from 'react'
import {StyleSheet} from 'react-native';
import logo from './logo.svg';

class Name extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
            <view style={styles.container}>
            <img id="profilepic" src={logo}
            style={{
             borderColor: 'white',
             borderwidth: 5,
             width: 240,
              height: 240,
            }}
             alt="profilepic"/>
             </view>
            <h1> Name </h1>
            </section>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    }
})

export default Name