import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './Profile';
import Home from "./home";
import Explore from "./Explore";
import EditProfile from './edit_profile';
import { serialized } from './About';
//import "bootstrap/dist/css/bootstrap.min.css";


export function ViewNavbar(): JSX.Element {
    return (
      <><Navbar expand="lg" style={{ backgroundColor: "#ADD8E6", paddingLeft: "15px", color: "black", paddingRight: "15px" }} className="justify-content-center">
        <Navbar.Brand style={{ position: "relative", left: "0px", color: "black", textAlign: "center" }}>
          Connectify
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
          <Nav className="flex-grow-1 justify-content-evenly">
            <Nav.Item style={{ textAlign: "center", margin: "20px", fontFamily: "quicksand" }}>
              <Nav.Link style={{ margin: "20px" }} href="/home">
                Home
              </Nav.Link>
              <Nav.Link style={{ margin: "20px", fontFamily: "quicksand" }} href="/profile/0">
                Profile
              </Nav.Link>
              <Nav.Link style={{ margin: "20px", fontFamily: "quicksand" }} href="/Explore">
                Explore
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar><Router>
          <Routes>
            <Route path='/profile/0' element={<Profile user_id="0" serialized={serialized}/>} />
            <Route path='/profile/1' element={<Profile user_id="1" serialized={serialized}/>} />
            <Route path='/profile/2' element={<Profile user_id="2" serialized={serialized}/>} />
            <Route path='/profile/3' element={<Profile user_id="3" serialized={serialized}/>} />
            <Route path='/profile/4' element={<Profile user_id="4" serialized={serialized}/>} />
            <Route path='/profile/5' element={<Profile user_id="5" serialized={serialized}/>} />
            <Route path='/profile/6' element={<Profile user_id="6" serialized={serialized}/>} />
            <Route path='/profile/7' element={<Profile user_id="7" serialized={serialized}/>} />
            <Route path='/profile/8' element={<Profile user_id="8" serialized={serialized}/>} />
            <Route path='/profile/9' element={<Profile user_id="9" serialized={serialized}/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/Explore' element={<Explore user_id="0" serialized={serialized}/> } />
            <Route path='/edit_profile' element={<EditProfile />} />
            {/* <Route path='profile' element={<Profile user_id="0"/>} /> */}
          </Routes>
        </Router></>
      );
}