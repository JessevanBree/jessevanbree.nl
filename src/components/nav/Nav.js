import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
	state = {
		navItems: []
	}

	constructor(prop) {
		super(prop);
		this.state.navItems = [
			{ link: "#about", text: "About" },
			{ link: "#experience", text: "Experience" },
		]
	}

	render() {
		return (<div className="nav">
			<ul className="navItems">
				{
					this.state.navItems.map((item, index) => {
						return (<li className="navItem" key={"nav_" + index}> <a target="_self" href={item.link}>{item.text}</a></li>);
					})
				}
			</ul>
		</div>);
	}
}