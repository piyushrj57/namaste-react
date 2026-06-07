import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called");

    }

    componentDidMount() {
        console.log("Parent Component did mount called")
    }

    render() {
        console.log("Parent render called");

        return (
            <div>
                <h1>About Us</h1>
                <h2>This is Namaste React.</h2>
                <UserClass name="Peeyush Raj (Class)" location="Ranchi" />
                <UserClass name="Peeyush Raj (Class)" location="Ranchi" />

            </div>
        )
    }
}
export default About;