import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

// Components
import Nav from '../nav/Nav';

export default class Sidebar extends React.Component {

	render() {
		return <div className="sidebar">
			<FontAwesomeIcon className="pageIcon" icon={faGlobeEurope} size="4x"/>
			<Nav></Nav>
		</div>
	}
}