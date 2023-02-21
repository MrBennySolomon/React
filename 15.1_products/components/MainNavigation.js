import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainNavigation.modules.css';


const MainNavigation = () => {
  return (

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
  )
}

export default MainNavigation