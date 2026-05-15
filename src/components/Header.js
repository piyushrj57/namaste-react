
import {React, useState} from "react";
import { CDN_LOGO } from "../utils/constant";

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={CDN_LOGO}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="profile-button" onClick={() => setIsLoggedIn(isloggedIn === "Login" ? "Logout" : "Login")}>
                        {isloggedIn}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;