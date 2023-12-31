import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
// import About from "./About";
const About = lazy(()=> import("./About"));
import ContactUs from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import UserContext from "../utils/userContext";
import appStore from "../utils/appStore";
// import Grocery from "./Grocery";
const Grocery = lazy(()=> import("./Grocery"));

const AppLayout = () => {
  const [userName, setUserName]= useState();

  //authentication
  useEffect(()=>{
      const data = {
        userName: "Anura Mohaniya"
      }
      setUserName(data.userName)
  },[]);

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value= {{loggedInUser: userName, setUserName}}>
      <div className="app">
        {/*<UserContext.Provider value= {{loggedInUser: "Nirvika"}}> */}
          <Header/>
       {/* </UserContext.Provider>*/}
          <Outlet/> 
      </div>
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
