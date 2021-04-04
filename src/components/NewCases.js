import React, { Component } from 'react';
import NewCasesData from './NewCasesData';

class NewCases extends Component {
	constructor(props) {
		super(props);
		this.state = { newCases: [] };
	}
	componentDidMount() {
		fetch('https://corona-api.com/countries/PH')
			.then((response) => response.json())
			.then((data) => this.setState({ newCases: data }));
	}
	render() {
		const { newCases } = this.state;
		return newCases.length === 0 ? (
			<div>
				<div className='columns is-centered m-4'>
					<p className='box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white'>
						Loading Data...
					</p>
				</div>
			</div>
		) : (
			<div>
				<NewCasesData
					confirmed={newCases.data.today.confirmed}
					deaths={newCases.data.today.deaths}
				/>
			</div>
		);
	}
}

export default NewCases;
