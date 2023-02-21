import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import React from 'react'
import data from '../../src/store';

const Products = () => {
  //const [products, setProducts] = useState([]);

  useEffect(() => {
    //setProducts(data);
  }, []);


  return (
    <>

      <h1>Products Page</h1>
      {data.map((item) => <Link key={item.id} to={`/products/${item.id}`}>{item.title}</Link>)}
    </>
    
  )
}

export default Products