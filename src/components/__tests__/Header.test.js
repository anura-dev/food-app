import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";


it("Should render Header Component with a Login Button", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button", {name: "Login"});
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items ", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )
    
    const cartItems = screen.getByText("Cart 🛒 (0)");
   // const cartItems = screen.getByText("/Cart/");
    
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on Click", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});