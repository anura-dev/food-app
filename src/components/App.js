import React from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import About from "./About";
import ContactUs from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
        <Header/>
        <Outlet/> 
    
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
