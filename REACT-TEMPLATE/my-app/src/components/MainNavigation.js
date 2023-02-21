import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from '../styles/MainNavigation.modules.css';


const MainNavigation = () => {
  return (

      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end={true}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default MainNavigation