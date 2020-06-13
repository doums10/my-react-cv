import React from 'react';

const Hobbies = () =>
{
	return (
		<div className="hobbies">
			<h3>Intérêts</h3>
			<ul>
				<li className="hobby">
					<i className="fas fa-running"></i>
					<span>Crossfit</span>
				</li>
				<li className="hobby">
					<i className="fas fa-basketball-ball"></i>
					<span>Basket</span>
				</li>
				<li className="hobby">
					<i className="fas fa-futbol"></i>
					<span>Foot en salle</span>
				</li>
				<li className="hobby">
					<i className="fas fa-plane"></i>
					<span>Voyages</span>
				</li>
			</ul>
		</div>
	);
};

export default Hobbies;