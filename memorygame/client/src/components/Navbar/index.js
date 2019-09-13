import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="title">{props.children}</div>
      <div className="score">Score: {props.score} Highscore: {props.highscore}</div>
    </nav>
  );
}

export default Navbar;
