import React from 'react';
import {Link} from "react-router-dom";
class Login extends React.Component
{
    render()
    {
        return (
            <form class="was-validated container container-sm border">
                <div class="form-group">
                    <h1 style={{textAlign:"center",color:"orange"}}>LOGIN </h1>
                    <label for ="email">Email : </label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" name="Email" required/>      
                </div>
                <div class="form-group">
                     <label for="pwd">Password : </label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="pwd" required/>
                </div>
                    <button type="submit" class="btn btn-primary">LOGIN</button>
                    <p className="text-center">
                   < Link to="/Signin" >
              <h5>create an Account </h5>  
            </Link>
                    </p>
             </form>
         )
    }
}
export default Login;