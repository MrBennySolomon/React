import React from 'react'
import './App.css';
class Todo extends React.Component {


  constructor () {
    super();
    this.state = {
      data: [],
      completed: []
    };
  }

  componentDidMount = () => {
    this.setState({data: this.props.data});
  }

  clickHandler = (e) => {
    const color = e.target.getAttribute('class');
    if (color === 'green'){
      e.target.setAttribute('class', 'red');
    }else if (color === 'red'){
      e.target.setAttribute('class', 'green');
    } 
  }

  render () {
    return (
    <>
      {this.state.data.map((item) => {
        return (<div className={item.completed ? 'green' : 'red'} onClick={this.clickHandler} key={item.name}>{item.name} - {this.state.completed}</div>)
      })}
    </>
    )
  }
}

export default Todo;