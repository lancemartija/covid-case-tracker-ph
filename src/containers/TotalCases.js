import React, { Component } from 'react';
import TotalCasesData from '../components/TotalCasesData';

class TotalCases extends Component {
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
				<div className='columns is-centered m-4'>
					<p className='box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white'>
						Loading...
					</p>
				</div>
			</div>
		) : (
			<div>
				<TotalCasesData cases={cases} />
			</div>
		);
	}
}

export default TotalCases;
