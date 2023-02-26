import React from 'react'
import { useGlobalContext } from '../context/context';

const Grandson = () => {
  const {presents} = useGlobalContext();
  return (
    <>
      {JSON.stringify(presents)}
    </>
  )
}

export default Grandson