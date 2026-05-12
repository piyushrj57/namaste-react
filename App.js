import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Component.
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://static.vecteezy.com/system/resources/thumbnails/021/953/308/small/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Restaurantcard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/5c5effc9-fae6-447d-850a-39f269c93084_10583.JPG" alt="logo" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h5>Rating: {props.rating}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
            <Restaurantcard resName="Meghna Foods" cuisine="Biryani, Asian, North Indian" rating="4.5" />
            <Restaurantcard resName="KFC" cuisine="Fast Food" rating="4.0" />
            
</div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render
root.render(<AppLayout />);
