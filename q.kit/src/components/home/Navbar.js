import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<Link to='/'>
				<h1 className='logo'>Q.KIT</h1>
			</Link>
			<ul className='henk'>
				<li className='henk-li'>
					<Link to='/ingredients'>Ingredients</Link>
				</li>
				<li>
					<Link to='/recipe'>Recipe</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
