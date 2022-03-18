import React, {Component} from 'react';
import './App.css';
import {Navbar,Nav,Container} from "react-bootstrap";
import {FaHome} from "react-icons/fa";
import {BsFillCartFill}  from "react-icons/bs";
import {BiLogOut}  from "react-icons/bi";
import _n from './components/navbar2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <Router>
      <Navbar bg="warning"   expand="lg" variant="dark" >
        <Container fluid>
    <Navbar.Brand href="#home">Instrument Delight</Navbar.Brand>
    &nbsp;&nbsp;
    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <FaHome size={30}/>
        <Nav.Link as={Link} to="/App">Home</Nav.Link>&nbsp;&nbsp;
        < BsFillCartFill size={25}/>
        <Nav.Link as={Link} to="/components/navbar2">Cart</Nav.Link>&nbsp;&nbsp;
        <img src="https://img.icons8.com/ios-filled/50/000000/edit-online-order.png" width={30} height={30}/>
        <Nav.Link as={Link} to={"/App"}>Myorders</Nav.Link>&nbsp;&nbsp;
      </Nav>
    </Navbar.Collapse>
    <Nav >
    <BiLogOut size={35}/>
      <Nav.Link as={Link} to={"/App"}>Logout</Nav.Link>
    </Nav>
    </Container >
    </Navbar>
    <div>
      <Switch>
      <Route path="/home">
      <_n></_n>
      </Route>
      <Route path="/cart">
      <_n></_n>
      </Route>
      <Route path="/myorders">
      <_n></_n>
      </Route>
      <Route path="/logout">
      <_n></_n>
      </Route>
      </Switch>
    </div>
    </Router>
    );
  }
}
export default App;
