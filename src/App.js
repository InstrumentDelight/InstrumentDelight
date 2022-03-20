import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch,Route} from 'react-router-dom';
import Login from './Login';
import Signin from  './Signin';


function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" component={Signin}/>
      </Switch>
    </div>
  );
}

export default App;
//class="form-control",id="pno"