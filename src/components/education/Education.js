import React from 'react';
import './Education.css';

import {formatDate } from '../../constants.js';


export default class Education extends React.Component {
	state = {
		education: []
	}
	
	constructor(props) {
		super(props);

		this.state.education = [
			{ title: "Software engineer", level: "Bachelor", university: "Hogeschool van Amsterdam", location: "Amsterdam", desc: "", from: new Date("2018-6"), to: "ongoing" },
			{ title: "Application developer", level: "MBO4", university: "ROC Kop van Noord-Holland", location: "Schagen", desc: "", from: new Date("2015"), to: new Date(2018) },
		]
	}

	render() {
		return (<div className="" id="education">
			<h1>Education</h1>
			<ul className="expList">
				{
					this.state.education.map((item, index) => {
						return (
							<li className="expItem" key={"edu_" + index}>
					<h2>{item.title} - {item.level}</h2>
								<h3>{item.university} in {item.location}</h3>
								<p>{ formatDate(item.from) } - { item.to !== "ongoing" ? formatDate(item.to): "To date" }</p>
								<p>{ item.desc }</p>
							</li>
						)
					})
				}
			</ul>
		</div>);
	}
}