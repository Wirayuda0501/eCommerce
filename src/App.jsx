import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Index from './components/psge'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  }, {
    path: "/shop",
    element: <div>Shop</div>
  },{
    path: "/about",
    element: <div>About</div>
  },{
    path: "/about",
    element: <div>About</div>
  },{
    path: "/contact",
    element: <div>Contact</div>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
