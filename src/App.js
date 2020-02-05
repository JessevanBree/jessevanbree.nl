import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Sidebar from './components/sidebar/Sidebar';
import MobileNav from './components/mobileNav/MobileNav';

export default class App extends React.Component {

	constructor(props){
		super(props);

		console.log('%cWelcome to my website jessevanbree.nl', 'color: #34a26b; font-size: 1.5rem');
	}

	render() {
		return ( 
			<div className = "app" >
				<Sidebar></Sidebar>
				<MobileNav></MobileNav>
				<div className="main">
					<About></About>
					<Experience></Experience>
					<Education></Education>
				</div>
			</div>
		);
	}
}