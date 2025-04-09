import React, {useEffect} from 'react';
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/context/UserContext";

class About extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }


    render() {
        return (
            <div>
                <h1>About Page</h1>
                <div>
                    <UserContext.Consumer>
                        {(data)=>
                            <div className={"text-lg font-bold"}>{data.loggedUser}</div>
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste react page</h2>
                <UserClass name={"Akshay (class)"} location={"Boston Class"}/>
                <User name={"Akshay (function)"}/>

            </div>
        );
    }
}

const About2 = () => {

    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>About Page</h1>
            <h2>This is Namaste react page</h2>
            <User name={"Akshay (function)"}/>
            <UserClass name={"Akshay (class)"} location={"Boston Class"}/>
        </div>
    );
};

export default About;