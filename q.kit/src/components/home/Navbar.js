import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* if logged in, render this navbar. else, render only pic navbar */}

      <Link to="/">
        <h1 className="logo">Q.KIT</h1>
        {/* <img className="logo" src="./img/frying_pan.png" alt="logo" /> */}
      </Link>
      <ul className="henk">
        <li className="henk-li">
          <Link to="/ingredients">Ingredients</Link>
        </li>
        <li>
          <Link to="/recipe">Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
