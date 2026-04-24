import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("h1", {id: "child"}, "Hello I am a H6 tag")
);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);