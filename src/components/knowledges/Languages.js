import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component
{
	state = {
		languages: [
			{ id: 1, value: "Javascript", xp: 1.8 },
			{ id: 2, value: "Css", xp: 2 },
			{ id: 3, value: "Php", xp: 1 },
			{ id: 4, value: "Ruby", xp: 1 }
		],
		frameworks: [
			{ id: 1, value: "React", xp: 1 },
			{ id: 2, value: "Rails", xp: 1 },
			{ id: 3, value: "Cms", xp: 1.5 },
			{ id: 4, value: "Sass", xp: 1.5 },
		]
	};

	render()
	{
		let { languages, frameworks } = this.state;

		return (
			<div className="languagesFrameworks">
				<ProgressBar
					languages={languages}
					className="languagesDisplay"
					title="langages"
				/>
				<ProgressBar
					languages={frameworks}
					className="frameworksDisplay"
					title="frameworks & bibliothèques"
				/>
			</div>
		);
	}
}

export default Languages;