import React from 'react';
import './Experience.css';

import {formatDate} from '../../constants.js';

export default class Experience extends React.Component {
	state = {
		experience: []
	}
	
	constructor(props) {
		super(props);

		this.state.experience = [
			{ title: "Junior applications developer", company: "NoNoA", location: "Heiloo", desc: "Part time work at NoNoA", from: new Date("2018-6"), to: new Date("2018-8") },
			{ title: "Applications developer intern", company: "NoNoA", location: "Heiloo", desc: "MBO4 internship", from: new Date("2017-11"), to: new Date("2018-2") },
			{ title: "Junior applications developer", company: "NoNoA", location: "Heiloo", desc: "Part time work at NoNoA", from: new Date("2015-7"), to: new Date("2017-8") },
			{ title: "Applications developer intern", company: "NoNoA", location: "Heiloo", desc: "MBO4 internship", from: new Date("2017-2"), to: new Date("2017-7") },
			{ title: "DKW", company: "Jumbo", location: "Alkmaar", desc: "", from: new Date("2015-12"), to: new Date("2017-3") },
		]
	}

	render() {
		return (<div className="" id="experience">
			<h1>Experience</h1>
			<ul className="expList">
				{
					this.state.experience.map((item, index) => {
						return (
							<li className="expItem" key={"exp_" + index}>
								<h2>{item.title}</h2>
								<h3>{item.company} in {item.location}</h3>
								<p>{ formatDate(item.from) } - { formatDate(item.to) }</p>
								<p>{ item.desc }</p>
							</li>
						)
					})
				}
			</ul>
		</div>);
	}
}