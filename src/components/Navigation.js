import React from 'react';
import { NavLink } from 'react-router-dom';
//import { logo } from '../media/meradius.jpg';

const Navigation = () =>
{

	return (
		<div className="sidebar">

			<div className="id">
				<div className="idContent">
					<img src={require('../media/meradius.jpg')} alt="profil-pic" />
					<h3>Sylla Mamadou</h3>
				</div>
			</div>

			<div className="navigation">
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="navActive">
							<i className="fas fa-home"></i>
							<span>Accueil</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/knowledges" activeClassName="navActive">
							<i className="fas fa-mountain"></i>
							<span>Compétences</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/portfolio" activeClassName="navActive">
							<i className="fas fa-images"></i>
							<span>Portfolio</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/contact" activeClassName="navActive">
							<i className="fas fa-address-book"></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="socialNetwork">
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/mamadou-sylla-dev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
					</li>
					<li>
						<a href="https://github.com/doums10" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
					</li>
					<li>
						<a href="https://twitter.com/Msaymla" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
					</li>
					<li>
						<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
					</li>
				</ul>
				<div className="signature">
					<a href="https://www.oxydev.fr/portfolio" target="_blank" rel="noopener noreferrer">
						<p>Oxydev - 2020</p>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navigation;