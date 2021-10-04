import React,{useState,useContext} from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

// import { userContext } from './../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        
        <Navbar.Brand href="#home">Learn & Grow</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/' className="me-3">Home</Nav.Link>
           <Nav.Link as={Link}  to='/about' className="me-3">About</Nav.Link>
           <Nav.Link as={Link}  to='/service' className="me-3">Services</Nav.Link>
           <Nav.Link as={Link}  to='/reveiw' className="me-3">Reveiw</Nav.Link>
           <Nav.Link as={Link} to='/login' className="me-4">
            </Nav.Link>
          </Nav>
      
          {/* <Nav>
          
          </Nav> */}
        </Navbar.Collapse>
        
      </Navbar>
      </>
    );
};

export default Header;
