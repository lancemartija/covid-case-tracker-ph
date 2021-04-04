import { getAllByPlaceholderText } from '@testing-library/dom';
import React from 'react';

const NewCasesData = ({ confirmed, deaths, date }) => {
	return (
		<div className='tc pt-6 pb-6 ml-6 mr-6 '>
			<div className='mb-5'>
				<h1 className='title-font title is-1'>New Cases Today</h1>
				<h1 className='subtitle is-5'>Date: {date}</h1>
			</div>
			<div className='tile is-parent is-vertical has-text-centered is-size-5'>
				<div className='white tile is-child box m-3 has-background-success'>
					<h3>New Cases: {confirmed}</h3>
				</div>
				<div className='white tile is-child box m-3 has-background-danger'>
					<h3>New Deaths: {deaths}</h3>
				</div>
			</div>
		</div>
	);
};

export default NewCasesData;
