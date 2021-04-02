import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import TotalCases from '../components/TotalCases';

class App extends Component {
	constructor() {
		super();
		this.state = { cases: [] };
	}
	componentDidMount() {
		fetch(
			'https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true'
		)
			.then((response) => response.json())
			.then((data) => this.setState({ cases: data }));
	}

	render() {
		const { cases } = this.state;
		return cases.length === 0 ? (
			<div>
				<Header cases={cases} />
				<div className='columns is-centered m-4'>
					<p className='box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white'>
						Loading...
					</p>
				</div>
			</div>
		) : (
			<div>
				<Header cases={cases} />
				<TotalCases cases={cases} />
			</div>
		);
	}
}

export default App;
