import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: {}
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshay23");
        const json = await data.json();
        this.setState({
          userInfo: json,
        })

        this.timer = setInterval(() => {
            console.log("Namaste React Count")
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className={"user-card"}>
                <img className="user-card__avatar" src={avatar_url} />
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
        );
    }
}

export default UserClass;