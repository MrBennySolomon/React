import React from 'react'

const CustomButton = ({color, handler}) => {

  const clickHandler = () => handler(color);
  return (
    <>
      <button onClick={clickHandler}>{color}</button>
    </>
  )
}

export default CustomButton