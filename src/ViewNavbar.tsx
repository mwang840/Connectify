import React from "react";
import {Nav, Navbar} from "react-bootstrap";


export function ViewNavbar(): JSX.Element {
    return (
        
          <Navbar expand="lg" style={{backgroundColor: "#ADD8E6", paddingLeft:"15px", color: "white", paddingRight: "15px"}} className="justify-content-center">
          
            <Navbar.Brand style={{position: "relative", left: "0px", color: "black", textAlign: "center"}}>
            Connectify
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-center">
            <Nav className="flex-grow-1 justify-content-evenly">
              <Nav.Item style={{textAlign: "center", margin: "20px", fontFamily:"quicksand"}}>
              <Nav.Link style={{ margin: "20px"}} href="/home">
                Home  
              </Nav.Link>
              <Nav.Link style={{ margin: "20px", fontFamily: "quicksand"}} href="/Profile">
                Profile
              </Nav.Link>
              <Nav.Link style={ {margin: "20px", fontFamily: "quicksand"}} href="/Explore">
                Explore
              </Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
}