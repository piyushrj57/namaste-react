import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Hello World from JSX.</h1>;


//React Functional Component.
const Title = () => {
    return <h1 className="head">Namaste React usingJSX </h1>
}
const HeadingComponent = () =>
(<div>
    <Title />
     <h1 className="heading">Namaste React </h1>
</div>);

//Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Render
root.render(<HeadingComponent />);