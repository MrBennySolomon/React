import React from 'react'
import './App.css';
class Form extends React.Component {


  constructor () {
    super();
    this.state = {
      hours: 0.0,
      minutes: 0.0,
      seconds: 0.0
    };
  }

  secondsHandler = (e) => {
    console.log()
    this.setState({hours: e.target.value / 3600, minutes: e.target.value / 60})
  }

  render () {
    return (
      <>
        <input type='number' placeholder='hours'/>{this.state.hours}<br/>
        <input type='number' placeholder='minutes'/>{this.state.minutes}<br/>
        <input onChange={this.secondsHandler} type='number' placeholder='seconds'/><br/>
      </>
    )
  }
}

export default Form;