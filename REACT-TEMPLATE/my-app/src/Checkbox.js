import React from 'react'

const Checkbox = (props) => {
  
  const checkHandler = event => {
    props.handler();
  }
  return (
    <>
      <input onChange={checkHandler} type="checkbox" checked={props.checked}></input>
      <label>{props.text}</label>
      <br/>
    </>
  )
}

export default Checkbox