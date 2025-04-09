import React, {useEffect} from 'react';

const User = ({name}) => {
    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            console.log("Namaste React Count")
        }, 1000);
        return () => {
            timer && clearInterval(timer);
            console.log("Namaste React Count cleanup")
        }
    }, []);
    return (
        <div className={"m-4 p-4 bg-gray-200 hover:bg-gray-400"}>
            <h2>{name}</h2>
            <h2>London</h2>
            <h4>@akshay23</h4>
        </div>
    );
};

export default User;