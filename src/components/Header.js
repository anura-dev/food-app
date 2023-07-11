import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnLogin, setBtnLogin] = useState("Login");

    const status= useOnlineStatus();
    
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={HEADER_LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {status === true ? "🟢"  : "🔴" } </li>
                <li><Link to ="/" >Home </Link></li>
                <li><Link to ="/about" >About</Link></li>
                <li><Link to ="/contact" >Contact Us</Link></li>
                <li><Link to ="/grocery">Grocery</Link></li>
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