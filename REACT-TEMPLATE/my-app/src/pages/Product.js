import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Product = ({data}) => {
  const params = useParams();
  return (
    <>
      <h1>{data[params.id - 1].title}</h1>
      <h3>{data[params.id - 1].size}</h3>
      <img alt='img' src={data[params.id - 1].imageUrl}/>
      <p><Link to='/products'>back</Link></p>
    </>
  )
}

export default Product;