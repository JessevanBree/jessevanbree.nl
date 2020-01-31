import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return ( 
		<div className = "app" >
			<Sidebar></Sidebar>
			<About></About>
			<Experience></Experience>
		</div>
	);
}

export default App;