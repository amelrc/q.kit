import React, { Component } from "react";
import IngredientsList from "./IngredientsList";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {},
      searchIngredients: []
    };
  }

  ingredientChecked = input => {
    let checkedIngredient = this.state.searchIngredients;
    checkedIngredient.push(input);

    this.setState({
      searchIngredients: checkedIngredient
    });
  };

  render() {
    return (
      <div className="AddingIngredients">
        <IngredientsList />
      </div>
    );
  }
}

export default Checkbox;
