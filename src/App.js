import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import { render } from '@testing-library/react';
import './index.css';
import Footer from './footer';

const App=() =>{
  const viwe =[
    {orderid:"OD121211750283829010",userid:"K.Sabari",productname:"Drums",price:"100",quanity:"1"},
    {orderid:"OD121982198205115000",userid:"NaveenPrabhu",productname:"Harmonica",price:"1800",quanity:"1"},
    {orderid:"OD121211123455115000",userid:"Dinseh",productname:"Flutes",price:"2000",quanity:"1"},
    {orderid:"OD121234550705115000",userid:"Gokul",productname:"Bongos",price:"2500",quanity:"1"},
    {orderid:"OD121211709828235000",userid:"Meghana",productname:"Piano,",price:"3500",quanity:"1"},
    {orderid:"OD121211372837315000",userid:"Karthik",productname:"Guitar",price:"5500",quanity:"1"},
    {orderid:"OD121211234563121000",userid:"Kiruthik",productname:"Instrument Microphone",price:"1500",quanity:"1"},
    
  ]
  const renderView = (viwe,index)=>{
    return (
      <tr className="header" key={index}>
        <td>{ viwe.orderid}</td>
        <td>{viwe.userid}</td>
        <td>{viwe.productname}</td>
        <td>{viwe.price}</td>
        <td>{viwe.quanity}</td>
      </tr>
    )
  }
  
  return (
    <div className="App">
      <br/> 
    
   <ReactBootStrap.Table striped bordered hover>
     
  <thead>
    <tr className='header2'>
      
      <th>orderid</th>     
      <th>userid</th>
      <th>productname</th>
      <th>price</th>
      <th>quanity</th>
    </tr>
  </thead>
  <tbody>
   {viwe.map(renderView)}
  </tbody>
</ReactBootStrap.Table>
< Footer/> 
    </div>
  );
}

export default App;
