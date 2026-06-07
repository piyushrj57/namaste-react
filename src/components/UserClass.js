import React from "react";

class UserClass extends React.Component {
    constructor(props) {

        console.log("Child constructer called");

        super(props)
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/piyushrj57");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }


    render() {

        const { name, location } = this.state.userInfo;

        console.log("Child render called");

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @peeyushraj04</h3>

            </div>
        )
    }
} export default UserClass;