import React from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import uiImage from './image/signin.png';

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
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="pno")
        {
            if(v!=="" && !Number(v))
            {
                err=<strong style={{color:"orange"}}>Invalid value,Enter the number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    render()
    {
    return (
        <div>
                <>
                <h1 className="mt-3" style={{color:"orange"}}>SIGN UP </h1>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={4} md={6} sm={12}>

                            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Enter UserName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" onChange={this.uservalue}   placeholder="Enter Mobile Number" name="pno"/>{this.state.errmsg}
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I Agree All The Terms And Condition" />
                 </Form.Group>

                <Button variant="primary btn-block" type="submit">SIGNUP</Button>
                
                <p className="text-center">
                    <br/>
                    <Link to="login">
                    <h6 className='font'> Already have an Account ? click here</h6>
               </Link>
               </p>
                </Form>
                </Col>
                     <Col lg={7} md={6} sm={6}>
                     <img className=" w-100" src={uiImage} alt=""/>
                     </Col>
                </Row>
                    </Container>
                </>
        </div>
    )
    };
};

export default Signin;