import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root'
import data from './store';
import Product from './pages/Product'



const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>,

  children: [
    {path: '/', element: <HomePage/>},
    {path: '/products', element: <ProductsPage/>},
    {path: '/products/1', element: <Product id='1' data={data}/>},
    {path: '/products/2', element: <Product id='2' data={data}/>},
    {path: '/products/3', element: <Product id='3' data={data}/>},
    {path: '/products/4', element: <Product id='4' data={data}/>},

  ],
  },
]);

const App = () => {


  
  return (
        <RouterProvider router={router} />
  )
}
export default App;
