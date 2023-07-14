import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnLogin, setBtnLogin] = useState("Login");

    const status= useOnlineStatus();
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-md">
        <div className="logo-container">
            <img className="w-32" src={HEADER_LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {status === true ? "🟢"  : "🔴" } </li>
                <li className="px-4"><Link to ="/" >Home </Link></li>
                <li className="px-4"><Link to ="/about" >About</Link></li>
                <li className="px-4"><Link to ="/contact" >Contact Us</Link></li>
                <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className="login-btn" onClick={()=> {
                    btnLogin=== "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
            </ul>
        </div>
        </div>
    )
}

export default Header;