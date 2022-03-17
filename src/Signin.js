import React from 'react';
import {Link} from "react-router-dom";
class Signin extends React.Component
{
    constructor(){
    super();
    this.state ={username:"",
                    pno:null,
                      errmsg:""};
    }
    uservalue =(event)=>
    {
        let n=event.targert.name;
        let v=event.target.value;
        let err="";
        if(n==="pno")
        {
            if(v!=="" && !Number(v))
            {
                err=<strong>Invalid value,Enter the number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    render()
    {
        return(
            <form class="was-validated container container-sm border">
                <div class="form-group">
                    <h1 style={{textAlign:"center",color:"orange"}}>SIGN UP</h1>
                    <label for ="uname" >UserName : </label>
                    <input type="text" class="form-control" id="uname" onChange={this.uservalue} placeholder="Enter name" name="username" required/>
                </div>
                <div class="form-group">
                    <label for ="email">Email : </label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" name="Email" required/>
                </div>
                <div class="form-group">
                    <label for="uname">phone number : </label>
                    <input type="text" class="form-control" id="pno" onChange={this.uservalue} placeholder="Enter Phone number" name="pno" required/>{this.state.errmsg}
                </div>
                 <div class="form-group">
                     <label for="pwd">password : </label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                 </div>
                 <div class="form-group">
                    <label for="pwd">confirm Password : </label>
                    <input type="password" class="form-control" id="pwd"  placeholder="confirm password" name='pwd' required/>
                </div>
                 <div class="form-group form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" required/> I agree all the Terms and Condition.
                    </label>
                 </div>
                 <button type="submit" class="btn btn-primary">SIGN UP</button>
                    <p className="text-center">
                    <Link to="/Login" >
               <h5> Already have an Account</h5>
            </Link>
            </p>
            </form>
        )
    }
}
export default Signin;