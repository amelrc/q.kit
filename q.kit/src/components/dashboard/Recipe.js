import React, { Component } from 'react';
import axios from 'axios';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap';

const app_id_recipe = '8c39fcd6';
const app_key_recipe = 'c4ffd4c73a39467ad2c7c9f331004ffd';

class Recipe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hits: [],
			ingredients: this.props.ingredients,
			recipe: []
		};
	}

	componentDidMount() {
		console.log('tell me state tell state', this.state.ingredients);

		let query = [];
		for (let i = 0; i < this.state.ingredients.length; i++) {
			if (this.state.ingredients[i].checked) {
				query.push(this.state.ingredients[i].name);
			}
		}

		let queryString = query.join('+');

		axios
			.get(
				`https://api.edamam.com/search?q=${queryString}&app_id=${app_id_recipe}&app_key=${app_key_recipe}`
			)
			.then(response => {
				console.log('this is the data', response);
				//this.setState({ hits: response.data.hits });
				console.log('what is this?:', this.state.hits);
				let recipeList = response.data.hits;
				var ingredientsStock = query;
				let filteredList = recipeList.filter(recipe => {
					let ingredientLines = recipe.recipe.ingredientLines;
					for (let i = 0; i < ingredientLines.length; i++) {
						for (let j = 0; j < ingredientsStock.length; j++) {
							if (ingredientLines[i].indexOf(ingredientsStock[j]) !== -1) {
								break;
							}
							if (j === ingredientsStock.length - 1) return false;
						}
					}
					return true;
				});

				console.log('fitler:', filteredList);
				this.setState({ recipe: filteredList });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		var recipes = this.state.recipe.map(hit => (
			<Card>
				<CardImg top width='50%' src={hit.recipe.image} alt='recipe' />
				<CardBody>
					<li key={hit.recipe.label}>
						<a href={hit.recipe.url} target='_blank'>
							<CardTitle>{hit.recipe.label}</CardTitle>
						</a>
					</li>
				</CardBody>
			</Card>
		));
		return <ul className='receta'>{recipes}</ul>;
	}
}

export default Recipe;
