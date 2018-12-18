import React from "react";


const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">The Clicky Game!</h1>
        <h3 className="mx-auto">{props.instructions}</h3>
        <h4 className="ml-auto mr-3">Current Score: {props.score}</h4>
    </nav>
);

export default Navbar;