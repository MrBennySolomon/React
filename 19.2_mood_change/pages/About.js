import React from 'react'
import '../styles/MainNavigation.modules.css';
import { useGlobalContext } from '../context/context';

const About = () => {
  const {isDarkMode} = useGlobalContext();

  return (
  <div className={isDarkMode ? 'about-con-dark' : 'about-con-light'}>
    <h1 className={isDarkMode ? 'h1-dark' : 'h1-light'}>About Page</h1>
  </div>
  )
}
export default About;