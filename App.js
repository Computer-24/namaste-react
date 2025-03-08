const parent = React.createElement(
    "div",
    {id: "parent"},
    [ React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h1", {}, "I am h1 tag2"),
        ]
    ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1", {}, "I am h1 tag3"),
                React.createElement("h2", {}, "I am h1 tag4"),
            ]
        ),]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);