import React, { Component } from 'react';
import './App.css';
import AddingIngredients from './components/dashboard/AddingIngredients';
import Navbar from './components/home/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Recipe from './components/dashboard/Recipe';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: [{ name: 'water', id: 1, checked: false }],
			query: ['water']
		};

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
		return (
			<BrowserRouter>
				<div className='App'>
					<Navbar />

					<Route exact path='/' component={Home} />
					<Route
						path='/ingredients'
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
						path='/recipe'
						render={props => (
							<Recipe {...props} ingredients={this.state.ingredients} />
						)}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
