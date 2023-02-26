
import React from 'react'
import '../styles/MainNavigation.modules.css';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const {isDarkMode} = useGlobalContext();

  return (
    <>
      <h1 className={isDarkMode ? 'h1-dark' : 'h1-light'}>Home Page</h1>
      <div className={isDarkMode ? 'home-con-dark' : 'home-con-light'}></div>
    </>
    )
}
export default Home;