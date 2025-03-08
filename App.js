import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    [ React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {}, "This! is Namaste React and Js Yo"),
            React.createElement("h1", {}, "The second tag and nice"),
        ]
    ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1", {}, "Very nice React and Js Yo"),
                React.createElement("h1", {}, "I am h1 tag4"),
            ]
        ),]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);