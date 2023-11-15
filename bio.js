var bio = React.createElement(
    "div",
    { "class": "container" },
    React.createElement(
        "p",
        null,
        "I\u2019m a PhD candidate in the ",
        React.createElement(
            "a",
            { href: "https://cse.umn.edu/cs" },
            "Department of Computer Science & Engineering"
        ),
        " at ",
        React.createElement(
            "a",
            { href: "https://twin-cities.umn.edu/" },
            "University of Minnesota, Twin Cities"
        ),
        ", advised by ",
        React.createElement(
            "a",
            { href: "https://www-users.cs.umn.edu/~mokbel/" },
            "Prof. Mohamed F. Mokbel"
        ),
        "."
    ),
    React.createElement(
        "p",
        null,
        "My interests are database/big data system internals. I'm particularly interested in system architectures for large scale analytics/transaction workloads, as well as data systems in the distributed/cloud environment. I also find streaming data systems interesting."
    ),
    React.createElement(
        "p",
        null,
        "My researches at UMN usually use spatial data as showcases."
    )
);

ReactDOM.createRoot(document.getElementById('bio')).render(bio);