import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <div className="holes">
      <div className="Navbar">
      
        <Link className="logo" to="/">
          <h3>Q.KIT</h3>
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
    </div>
  );
};

export default Navbar;
