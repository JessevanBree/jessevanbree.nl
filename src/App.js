import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return ( 
		<div className = "app" >
			<Sidebar></Sidebar>
			<div className="main">
				<About></About>
				<Experience></Experience>
				<Education></Education>
			</div>
		</div>
	);
}

export default App;