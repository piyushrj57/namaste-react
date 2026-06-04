import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React.</h2>
            <User name="Peeyush Raj(Function)" location="Bengaluru"/>
            <UserClass name="Peeyush Raj (Class)" location="Ranchi" />
        </div>
    )
}
export default About;