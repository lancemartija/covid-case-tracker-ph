import React, { Component } from 'react';
import TotalCasesData from './TotalCasesData';

class TotalCases extends Component {
	constructor() {
		super();
		this.state = { cases: [] };
	}
	componentDidMount() {
		fetch('https://corona-api.com/countries/PH')
			.then((response) => response.json())
			.then((data) => this.setState({ cases: data }));
	}
	render() {
		const { cases } = this.state;
		return cases.length === 0 ? (
			<div>
				<div className='columns is-centered m-4'>
					<p className='box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white'>
						Loading Data...
					</p>
				</div>
			</div>
		) : (
			<div>
				<TotalCasesData
					date={cases.data.timeline[0].date}
					confirmed={cases.data.latest_data.confirmed}
					recovered={cases.data.latest_data.recovered}
					deaths={cases.data.latest_data.deaths}
					critical={cases.data.latest_data.critical}
				/>
			</div>
		);
	}
}

export default TotalCases;
