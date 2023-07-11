import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
// import About from "./About";
const About = lazy(()=> import("./About"));
import ContactUs from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";
// import Grocery from "./Grocery";
const Grocery = lazy(()=> import("./Grocery"));

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
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
