import React, { Component } from 'react';
import IngredientsList from './IngredientsList';

class AddingIngredients extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: props.ingredients,
			name: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	clearState = () => {
		this.setState({
			search: '',
			name: ''
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.addIngredient(this.state.name);
		debugger;
		this.setState(
			{
				name: ''
			},
			function() {
				debugger;
			}
		);
	};

	render() {
		return (
			<div className='AddingIngredients'>
				<form
					onSubmit={e => {
						this.clearState();
						this.props.setIngredients(this.state.name, e);
					}}
				>
					<div>
						<label htmlFor='name' />
						<input
							className='input-bar'
							type='text'
							id='name'
							placeholder='type your ingredients'
							onChange={this.handleChange}
							onFocus={this.state.value}
							value={this.state.name}
						/>
					</div>
					<div>
						<button className='btn'>Add</button>
					</div>
				</form>
				<IngredientsList
					ingredients={this.props.ingredients}
					changeCheckBox={this.props.changeCheckBox}
					deleteIngredient={this.state.deleteIngredient}
				/>
			</div>
		);
	}
}

export default AddingIngredients;
