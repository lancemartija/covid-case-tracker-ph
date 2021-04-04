import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import TotalCases from '../components/TotalCases';
import CardList from '../components/CardList';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<TotalCases />
				<CardList />
			</div>
		);
	}
}

export default App;
