import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Login from './Login';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/Signin" exact component={Signin}/>
        <Route path="/Login" exact component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
