import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import NewCases from '../components/NewCases';
import TotalCases from '../components/TotalCases';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div
					style={{
						boxSizing: 'border-box',
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
					}}
				>
					<NewCases />
					<TotalCases />
				</div>
				<CardList />
				<Footer />
			</div>
		);
	}
}

export default App;
