import React, {Component} from 'react';
import './App.css';
import PermanentNav from './components/PermanentNav';
import _n from './components/navbar2';
import _r from './components/order';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <Router>
      
    <div>
      <Switch>
      <Route exact path="/home">
        <PermanentNav />
      </Route>
      <Route path="/cart">
      <_r></_r>
      </Route>
      <Route path="/myorders">
      <PermanentNav/>
      </Route>
      <Route path="/logout">
      <PermanentNav />
      </Route>
      <Route exact path="/">
      <PermanentNav/>
      </Route>
      </Switch>
    </div>
    </Router>
    );
  }
}
export default App;
