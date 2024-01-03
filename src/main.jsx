import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home/Home';
import AddCocaCola from './component/addcocacola/AddCocaCola';
import UpdateCocaCola from './component/updatecocacola/UpdateCocaCola';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './component/signup/SignUp';
import SignIn from './component/signup/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/cocacola'),
  },
  {
    path: 'addcocacola',
    element: <AddCocaCola></AddCocaCola>,
  },
  {
    path: 'updatecocacola/:id',
    element: <UpdateCocaCola></UpdateCocaCola>,
    loader: ({ params }) => fetch(`http://localhost:5000/cocacola/${params.id}`),
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
