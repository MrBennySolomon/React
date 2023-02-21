import { Link, useNavigate } from 'react-router-dom';

import React from 'react'

const Products = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/');
  }


  return (
    <>
      <h1>Products Page</h1>
      {/* <p>
        Go To <Link to='/'>go to home page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
    </>
    
  )
}

export default Products