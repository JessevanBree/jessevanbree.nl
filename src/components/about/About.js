import React from 'react';
import './About.css';

import Social from '../social/Social';

export default class About extends React.Component {

	render() {
		return ( <div id="about">
			<h1 className="aboutTitle">Jesse van Bree</h1>
			<p className="aboutShortInfo">HBO-ICT Software engineering student at <a className="textLink" target="_blank" rel="noopener noreferrer" href="https://www.hva.nl">HVA</a></p>
			<p className="aboutInfo"> lorum impsum lorum impsum lorum impsum lorum impsum lorum impsum lorum impsum lorum impsum lorum impsum lorum impsum </p>
			<Social></Social>

		</div> );
	}
}