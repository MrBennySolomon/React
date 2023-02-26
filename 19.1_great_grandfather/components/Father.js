import React, { useEffect } from 'react';
import Son from './Son';
import { useGlobalContext } from '../context/context';

const Father = () => {
const {addPresents} = useGlobalContext();

useEffect(() => {
  addPresents(['chocolate', 'fruits', 'ice-cream']);

}, []);

  return (
    <Son/>
  )
}

export default Father