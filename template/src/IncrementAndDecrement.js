import { Component } from 'react'
import './IncrementAndDecrement.css';

class IncrementAndDecrement extends Component {

  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }

  decrementHandler () {
    if (this.state.counter > -10) {
      this.setState({counter: -1})
    }
  }

  incrementHandler () {
    if (this.state.counter < 10) {
      this.setState({counter: 1})
    }
  }

  checkValue () {
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

// const IncrementAndDecrement = (props) => {
//   const [counter, setCounter] = useState(0);

//   const decrementHandler = () => {
//     if (counter > -10) {
//       setCounter((prev) => prev - 1);
//     }
    
//   }
//   const incrementHandler = () => {
//     if (counter < 10) {
//       setCounter((prev) => prev + 1); 
//     }
//   }

//   const checkValue = () => {
//     if (counter > 0) {
//       return props.positive
//     }else if (counter < 0) {
//       return props.negative;
//     }else{
//       return props.zero;
//     }
//   }

//   return (

//     <>
//       <button onClick={decrementHandler}>-</button>
//       <label className={checkValue()}>{counter}</label>
//       <button onClick={incrementHandler}>+</button>
//     </>
//   )
// }

// export default IncrementAndDecrement