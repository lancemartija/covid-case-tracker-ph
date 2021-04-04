import React, { Component } from 'react';
import CardData from './CardData';

class CardList extends Component {
	constructor() {
		super();
		this.state = {
			record: [],
		};
	}
	async componentDidMount() {
		const url = 'https://covid19-api-philippines.herokuapp.com/api/top-regions';
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ record: data });
	}
	render() {
		const { record } = this.state;
		return record.length === 0 ? (
			<div>
				<div className='columns is-centered m-4'>
					<p className='box column is-one-quarter has-text-centered has-background-grey is-size-5 has-text-white'>
						Loading Data...
					</p>
				</div>
			</div>
		) : (
			<div>
				<div className='has-text-centered mt-6 mb-6'>
					<h1 className='title is-1 title-font'>TOTAL CASES PER REGION</h1>
					<h1 className='subtitle is-5'>Last Updated: {record.last_update}</h1>
				</div>
				<div
					className='ml-6 mr-6'
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
					}}
				>
					{record.data.map((info, i) => {
						return (
							<CardData
								region={record.data[i].region}
								cases={record.data[i].cases}
								recovered={record.data[i].recovered}
								deaths={record.data[i].deaths}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default CardList;
