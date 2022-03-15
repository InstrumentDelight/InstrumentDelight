import React, { Component } from 'react'

 class counter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count: 0
       }
     }
     inc(){
     /*    this.setState({
             count:this.state.count+1
         },() => {
             console.log(this.state.count)
         })*/
         this.setState(prevState => ({
             count : prevState.count +1
         }))
     }
     inc5(){
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        this.inc()
        }
    
  render() {
    return (<div>
      <div>counter - {this.state.count}</div>
      <button onClick={() => this.inc5()}>Inc</button></div>
    )
  }
}

export default counter