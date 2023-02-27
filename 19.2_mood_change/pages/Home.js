
import React from 'react'
import '../styles/MainNavigation.modules.css';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const {isDarkMode} = useGlobalContext();
  document.body.style.backgroundColor = isDarkMode ? '#333' : 'lightgray';

  return (
      <h1 className={isDarkMode ? 'h1-dark' : 'h1-light'}>Home Page</h1>
    )
}
export default Home;