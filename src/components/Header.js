import { useContext, useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnLogin, setBtnLogin] = useState("Login");

    const status= useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //Subscribing to the store using useSelector
    const cartItems = useSelector((store) => store.cart.items);
   // console.log(cartItems, "carttt");
    
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
                <li className="px-4 font-bold text-lg">
                    <Link to ="/cart">Cart 🛒 ({cartItems.length})</Link>
                </li>
                <button className="login-btn" onClick={()=> {
                    btnLogin=== "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
                <li className="px-4 font-semibold">{loggedInUser}</li>
            </ul>
        </div>
        </div>
    )
}

export default Header;