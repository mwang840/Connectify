import React from "react";
import {Nav, Navbar} from "react-bootstrap";


export function ViewNavbar(): JSX.Element {
    return (
        
          <Navbar expand="lg" style={{backgroundColor: "#ADD8E6", paddingLeft:"15px", color: "white", paddingRight: "15px", fontSize: "40px"}} className="justify-content-center">
          
            <Navbar.Brand style={{position: "relative", left: "0px", color: "black", textAlign: "center"}}>
            Connectify
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Item style={{textAlign: "center", margin: "20px", fontFamily:"quicksand"}}>
                <span className="">
                  <Nav.Link style={{ textAlign: "right", margin: "20px", verticalAlign: "20px", textDecoration: "none", color: "black", borderRadius: "25px", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "30px", paddingRight: "30px", backgroundColor:"white"}} href="/home" target="_blank">
                  Home  
                </Nav.Link>
                </span>
              
              <Nav.Link style={{ margin: "20px", verticalAlign: "20px", fontFamily: "quicksand", textDecoration: "none", color: "black",  borderRadius: "25px", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "30px", paddingRight: "30px", backgroundColor:"white"}} href="/Profile" target="_blank">
                Profile
              </Nav.Link>
              <Nav.Link style={ {margin: "20px", verticalAlign: "20px", fontFamily: "quicksand", textDecoration: "none", fontSize: "40px", color: "black", borderRadius: "25px", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "30px", paddingRight: "30px", backgroundColor:"white"}} href="/Explore" target="_blank">
                Explore
              </Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
}