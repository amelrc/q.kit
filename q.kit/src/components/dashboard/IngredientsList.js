import React from 'react';

const IngredientsList = props => {
	const ingredientsList = props.ingredients.map(ingredient => {
		return (
			<div className='ingredient' key={ingredient.id}>
				<div className='align-middle'>
					<form>
						<input
							className='check'
							type='checkbox'
							onClick={e => props.changeCheckBox(ingredient, e)}
						/>

						<label className='checkbox-label'>{ingredient.name}</label>
					</form>
				</div>
			</div>
		);
	});
	return <div className='ingredient-list'>{ingredientsList}</div>;
};

export default IngredientsList;
