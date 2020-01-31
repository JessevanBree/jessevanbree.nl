import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Social.css';

export default class Social extends React.Component {
	state = {
		socItems: []
	}

	constructor(prop) {
		super(prop);
		this.state.socItems = [
			{ link: "https://www.linkedin.com/in/jessevanbree/", text: "LinkedIn", icon: faLinkedin},
			{ link: "#", text: "Email", icon: faEnvelope },
			{ link: "#", text: "Phone", icon: faPhone, rotation: 90  }
		]
	}

	render() {
		return (<div className="soc">
			<h4 className="sideSubTitle">Contact me:</h4>
			<ul className="socItems">
				{
					this.state.socItems.map((item, index) => {
						return (
						<li className="socItem" key={"soc_" + index}> 
							<a target="_blank" rel="noopener noreferrer" href={item.link}><FontAwesomeIcon icon={item.icon} rotation={item.rotation} /> {item.text}</a> 
						</li>);
					})
				}
			</ul>
		</div>);
	}
}