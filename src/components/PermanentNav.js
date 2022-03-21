import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap";
import {FaHome} from "react-icons/fa";
import {BsFillCartFill}  from "react-icons/bs";
import { Link } from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi'
const PermanentNav = () => {
  return (
    <div>
        <Navbar bg="warning"   expand="lg" variant="dark" >
        <Container fluid>
    <Navbar.Brand href="#home">Instrument Delight</Navbar.Brand>
    &nbsp;&nbsp;
    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <FaHome size={30}/>
        <Nav.Link as={Link} to="/">Home</Nav.Link>&nbsp;&nbsp;
        < BsFillCartFill size={25}/>
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>&nbsp;&nbsp;
        <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" width={30} height={30}/>
        <Nav.Link as={Link} to={"/orders"}>Myorders</Nav.Link>&nbsp;&nbsp;
        <div style={{marginLeft:'780px'}}></div>
        <BiLogOut size={35}/>
      <Nav.Link as={Link} to={"/"}  >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container >
    </Navbar>
    </div>
  )
}

export default PermanentNav