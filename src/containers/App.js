import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import TotalCases from '../components/TotalCases';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<TotalCases />
				<CardList />
				<Footer />
			</div>
		);
	}
}

export default App;
