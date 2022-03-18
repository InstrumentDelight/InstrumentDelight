import React, {Component} from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";
import {BiLogOut}  from "react-icons/bi";
import {MdProductionQuantityLimits} from 'react-icons/md'
import _a from './greet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <Navbar bg="warning"   expand="lg" variant="dark" >
        <Container fluid>
    <Navbar.Brand href="#home">Instrument Delight</Navbar.Brand>
    &nbsp;&nbsp;
    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <MdProductionQuantityLimits/>
        <Nav.Link as={Link} to="/">products</Nav.Link>&nbsp;&nbsp;
        <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" width={30} height={30}/>
        <Nav.Link as={Link} to={"/"}>Orders</Nav.Link>&nbsp;&nbsp;
      </Nav>
    </Navbar.Collapse>
    <Nav >
    <BiLogOut size={35}/>
      <Nav.Link as={Link} to="/">Logout</Nav.Link>
    </Nav>
    </Container >
    </Navbar>
    );
  }
}
export default App;
//added