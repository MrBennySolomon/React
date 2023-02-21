import { Link } from 'react-router-dom';
import React from 'react'
import data from '../../src/store';
import '../styles/MainNavigation.modules.css';

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <div className='flex'>{data.map((item) => <Link key={item.id} to={`/products/${item.id}`}>{item.title}</Link>)}</div>
    </>
  )
}

export default Products;