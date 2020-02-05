import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import './MobileNav.css';

// Components
import Nav from '../nav/Nav';

export default class MobileNav extends React.Component {

	render() {
		return <div className="mobileNav">
			<FontAwesomeIcon className="mobilePageIcon" icon={faGlobeEurope} size="4x"/>
		</div>
	}
}