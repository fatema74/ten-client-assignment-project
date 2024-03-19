import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home/Home';
import AddCocaCola from './component/addcocacola/AddCocaCola';
import UpdateCocaCola from './component/updatecocacola/UpdateCocaCola';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './component/signup/SignUp';
import SignIn from './component/signup/SignIn';
import MainLayout from './component/LayOut/MainLayout';
import Authprovider from './component/Authprovider/Authprovider';
import User from './component/signup/User';
import Details from './component/BrandCard/Details';
import PriveteRoute from './component/PriveteRoute/PriveteRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch('https://git-remote-rm-origin-et2f.onrender.com/cocacola'),
      },
      {
        path: '/addcocacola',
        element: <AddCocaCola></AddCocaCola>,
      },
      {
        path: '/updatecocacola/:id',
        element: <UpdateCocaCola></UpdateCocaCola>,
        loader: ({ params }) =>
          fetch(
            `https://git-remote-rm-origin-et2f.onrender.com/cocacola/${params.id}`
          ),
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <User></User>,
        loader: () =>
          fetch('https://git-remote-rm-origin-et2f.onrender.com/user'),
      },
      {
        path: '/details/:id',
        element: (
          <PriveteRoute>
            <Details></Details>
          </PriveteRoute>
        ),
        loader: () =>
          fetch('https://git-remote-rm-origin-et2f.onrender.com/cocacola'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
