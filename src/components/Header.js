import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={HEADER_LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=> {
                    btnLogin=== "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
            </ul>
        </div>
        </div>
    )
}

export default Header;