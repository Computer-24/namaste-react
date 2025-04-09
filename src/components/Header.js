import {useContext, useState} from "react";
import {LOGO_URL} from "../utils/constants"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const isOnline = useOnlineStatus();
    const {loggedUser} = useContext(UserContext)
    const items = useSelector((store) => store.cart.items);
    return (
        <div className={"flex justify-between sm:bg-yellow-200 lg:bg-yellow-500"}>
            <div className="w-28">
                <img className="logo" src={LOGO_URL} alt=""/>
            </div>
            <div className="flex items-center justify-between">
                <ul className={"flex p-4 m-4"}>
                    <li className={"px-4"}>{`User is ${isOnline ? "online" : "offline"}`} </li>
                    <li className={"px-4"}><Link to={"/"} className={"nav-link"}>Home</Link></li>
                    <li className={"px-4"}><Link to={"/grocery"} className={"nav-link"}>Grocery Store</Link></li>
                    <li className={"px-4"}><Link to={"/about"} className={"nav-link"}>About</Link></li>
                    <li className={"px-4"}><Link to={"/contact"} className={"nav-link"}>Contact</Link></li>
                    <li className={"px-4"}><Link to={"/cart"} className={"nav-link"}>Cart {items.length}</Link></li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className={"px-4 font-bold"}>{loggedUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header
