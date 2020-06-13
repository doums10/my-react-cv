import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class contact extends Component
{

	render()
	{
		return (

			<div className="contact">
				<Navigation />
				<div className="contactContent">
					<div className="header"></div>
					<div className="contactBox">
						<h1>Contactez moi</h1>
						<ul>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<span>Montévrain</span>
							</li>
							<li>
								<i className="fas fa-mobile-alt"></i>
								<CopyToClipboard text="0642844284">
									<span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>06 99 65 87 94</span>
								</CopyToClipboard>
							</li>
							<li>
								<i className="far fa-envelope"></i>
								<CopyToClipboard text="fromscratch.derien@gmail.com">
									<span className="clickInput" onClick={() => { alert('E-mail copié !'); }}>m27sylla@gmail.com</span>
								</CopyToClipboard>
							</li>
						</ul>
					</div>
					<div className="socialNetwork">
						<ul>
							<a href="https://www.linkedin.com/in/mamadou-sylla-dev/" target="_blank" rel="noopener noreferrer">
								<h4>LinkedIn</h4>
								<i className="fab fa-linkedin"></i>
							</a>
							<a href="https://github.com/doums10" target="_blank" rel="noopener noreferrer">
								<h4>Github</h4>
								<i className="fab fa-github"></i>
							</a>
							<a href="https://twitter.com/Msaymla" target="_blank" rel="noopener noreferrer">
								<h4>Twitter</h4>
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
								<h4>CodePen</h4>
								<i className="fab fa-codepen"></i>
							</a>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default contact;