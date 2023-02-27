import React from 'react'
import './IncrementAndDecrement.css';

class IncrementAndDecrement extends React.Component {

  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }

  decrementHandler = () => {
    if (this.state.counter > -10) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  incrementHandler = () => {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }

  checkValue = () => {
    if (this.state.counter > 0)   return this.props.positive
    if (this.state.counter < 0)   return this.props.negative;
    if (this.state.counter === 0) return this.props.zero;
  }

  render () {
    return (
    <>
      <button onClick={this.decrementHandler}>-</button>
      <label className={this.checkValue()}>{this.state.counter}</label>
      <button onClick={this.incrementHandler}>+</button>
    </>
    )
  }
}

export default IncrementAndDecrement;

// export default IncrementAndDecrement