import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home/Home';
import AddCocaCola from './component/addcocacola/AddCocaCola';
import UpdateCocaCola from './component/updatecocacola/UpdateCocaCola';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: 'addcocacola',
    element: <AddCocaCola></AddCocaCola>
  },
  {
    path: 'updatecocacola',
    element: <UpdateCocaCola></UpdateCocaCola>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
