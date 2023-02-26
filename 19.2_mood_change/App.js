import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Root from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>,

  children: [
    {path: '/', element: <HomePage/>},
    {path: '/about', element: <AboutPage/>}
  ]
  }
]);

const App = () => {
  return (
        <RouterProvider router={router} />
  )
}
export default App;
