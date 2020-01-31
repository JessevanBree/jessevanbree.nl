import React from 'react';
import './Sidebar.css';

// Components
import Nav from '../nav/Nav';
import Social from '../social/Social';

export default class Sidebar extends React.Component {

	render() {
		return <div className="sidebar">
			<h2 className="sbTitle">Jesse van Bree</h2>
			<Nav></Nav>
			<Social></Social>
		</div>
	}
}