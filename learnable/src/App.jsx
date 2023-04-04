import React, { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Nav from './components/Nav/Navbar';
import HomePage from './pages/HomePage';
import WorkshopDetail from './pages/WorkshopDetailPage';
import NewWorkshopPage from "./pages/NewWorkshop";
import NewUserPage from "./pages/NewUserPage";
import LoginPage from "./pages/LoginPage";
import Workshops from "./pages/WorkshopOverviewPage";


const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />

    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/workshop-form',
        element: <NewWorkshopPage />
      },
      {
        path: '/workshop/:id',
        element: <WorkshopDetail />
      },
      {
        path: '/createaccount',
        element: <NewUserPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/workshops',
        element: <Workshops />
      },
      
      

    ],
  },
]);

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App