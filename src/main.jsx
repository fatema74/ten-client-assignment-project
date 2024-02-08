import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './component/Home/Home';
import AddCocaCola from './component/addcocacola/AddCocaCola';
import UpdateCocaCola from './component/updatecocacola/UpdateCocaCola';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './component/signup/SignUp';
import SignIn from './component/signup/SignIn';
import MainLayout from './component/LayOut/MainLayout';
import About from './component/About/About';
import Authprovider from './component/Authprovider/Authprovider';
import User from './component/signup/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://ten-assignment-project-61qhs5ztk-kanis-fatemas-projects.vercel.app/cocacola'
          ),
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: 'addcocacola',
        element: <AddCocaCola></AddCocaCola>,
      },
      {
        path: 'updatecocacola/:id',
        element: <UpdateCocaCola></UpdateCocaCola>,
        loader: ({ params }) =>
          fetch(
            `https://ten-assignment-project-61qhs5ztk-kanis-fatemas-projects.vercel.app/cocacola/${params.id}`
          ),
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/users',
        element: <User></User>,
        loader: () =>
          fetch(
            'https://ten-assignment-project-61qhs5ztk-kanis-fatemas-projects.vercel.app/user'
          ),
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
