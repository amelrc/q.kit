import React, { Component } from "react";
import "./App.css";
// import IngredientsList from "./components/IngredientsList";
import AddingIngredients from "./components/dashboard/AddingIngredients";
import Navbar from "./components/home/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Recipe from "./components/dashboard/Recipe";
// import Favorite from "./components/dashboard/Favorite";
import Show from "./components/home/Show";
// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
// move the constructor and function to future home
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [{ name: "water", id: 1, checked: false }],
      query: ["water"]
    };
    //   this.deleteIngredient = this.deleteIngredient.bind(this);
  }

  changeCheckBox = (ingredient, e) => {
    const allIngredients = this.state.ingredients;

    for (let i = 0; i < allIngredients.length; i++) {
      if (
        allIngredients[i].name.toLowerCase() === ingredient.name.toLowerCase()
      ) {
        allIngredients[i].checked = e.target.checked;
        break;
      }
    }
    //let updatedIngredients = [...this.state.ingredients, allIngredients];
    this.setState({
      ingredients: allIngredients
    });
  };

  setIngredients = (ingredientName, e) => {
    e.preventDefault();

    let newIngredient = {
      name: ingredientName,
      id: Math.random() * 100,
      checked: false
    };

    const allIngredients = this.state.ingredients;
    let doesIngredientExist = true;

    for (let i = 0; i < allIngredients.length; i++) {
      if (
        allIngredients[i].name.toLowerCase() ===
        newIngredient.name.toLowerCase()
      ) {
        doesIngredientExist = false;
        break;
      }
    }

    if (newIngredient.name && doesIngredientExist) {
      let ingredients = [...this.state.ingredients, newIngredient];
      this.setState({
        ingredients: ingredients
      });
    } else {
      return false;
    }
  };

  render() {
    // console.log("What is the state", this.state);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route
            path="/ingredients"
            render={props => (
              <AddingIngredients
                {...props}
                changeCheckBox={this.changeCheckBox}
                ingredients={this.state.ingredients}
                setIngredients={this.setIngredients}
              />
            )}
          />
          <Route
            path="/recipe"
            render={props => (
              <Recipe {...props} ingredients={this.state.ingredients} />
            )}
          />
          {/* <AddingIngredients addIngredient={this.addIngredient} /> */}
          {/* <IngredientsList
            ingredients={this.state.ingredients}
            deleteIngredient={this.deleteIngredient} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
