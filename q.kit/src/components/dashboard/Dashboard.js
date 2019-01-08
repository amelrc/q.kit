import React from "react";
import { NavLink } from "react-router-dom";
import AddingIngredients from "./AddingIngredients";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <AddingIngredients />
      <ul>
        <li>{/* <NavLink to="/ingredients">Ingredients</NavLink> */}</li>
        <li>{/* <NavLink to="/recipe">Recipe</NavLink> */}</li>
        <li>{/* <NavLink to="/favorite">Favorite</NavLink> */}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
