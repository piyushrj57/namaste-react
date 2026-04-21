const parent = React.createElement("h1", {id: "parent"}, 
    React.createElement("h1", {id: "child"},
         React.createElement("h6", {id: "parent"}, "Hello I am a H1 tag"))
);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);