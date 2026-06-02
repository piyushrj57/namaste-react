
import { React, useState } from "react";
import { CDN_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>

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