import React, { Component } from 'react';
import './App.css';
import './TotalCases';
import Header from '../components/Header';
import TotalCases from './TotalCases';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<TotalCases />
			</div>
		);
	}
}

export default App;
