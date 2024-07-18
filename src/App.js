import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from "./components/Contact";
import Error from './components/Error'
import Restaurant from "./components/Restaurant"

AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<Restaurant/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
