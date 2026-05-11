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
const Body =() =>{
    return(
        <div className="body">
           <div className="search"> Search</div>
        </div>
    )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render
root.render(<AppLayout />);
