import React,{Component} from "react";
class App1 extends Component{
    constructor(){
        super()
        this.state={
            NAME: 'Welcome AJ'
        }
    }
    changeMsg(){
        this.setState({
            NAME:"TYSM AJ"
        })
    }
    render(){
        return(
            <div>
            <h1> {this.state.NAME}</h1>
            <button onClick={()  =>  this.changeMsg()}>Click</button></div>
        )
    }
}
export default App1