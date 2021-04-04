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
			<div className='p-6'>
				<div className='title is-4 has-text-centered'>
					<h1 className='title-font'>TOTAL CASES PER REGION</h1>
				</div>
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
		);
	}
}

export default CardList;
