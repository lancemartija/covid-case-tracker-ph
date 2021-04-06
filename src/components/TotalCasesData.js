import React from 'react';

const TotalCasesData = ({ date, confirmed, recovered, deaths, critical }) => {
	return (
		<div className='tc pt-6 pb-6'>
			<div className='title is-4 has-text-centered'>
				<h1 className='title-font title is-1'>TOTAL CASES</h1>
				<h1 className='subtitle is-5'>Date Updated: {date}</h1>
			</div>
			<div
				className='ml-6 mr-6 is-size-5'
				style={{
					boxSizing: 'border-box',
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
				}}
			>
				<div className='box m-3 has-background-danger'>
					<h3 className='white'>Infected: {confirmed}</h3>
				</div>
				<div className='box m-3 has-background-success'>
					<h3 className='white'>Recovered: {recovered}</h3>
				</div>
				<div className='box m-3 has-background-black-ter '>
					<h3 className='has-text-white'>Deceased: {deaths}</h3>
				</div>
				<div className='box m-3 has-background-warning'>
					<h3 className='has-text-warning-dark'>Active Cases: {critical}</h3>
				</div>
			</div>
		</div>
	);
};

export default TotalCasesData;
