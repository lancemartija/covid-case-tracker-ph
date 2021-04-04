import React from 'react';

const TotalCasesData = ({ cases }) => {
	return (
		<div>
			<div className='title is-4 has-text-centered'>
				<h1 className='title-font'>TOTAL CASES</h1>
			</div>
			<div className='tile is-ancestor ml-6 mr-6'>
				<div className='tile is-parent is-vertical has-text-centered is-size-5'>
					<div className='tile is-child box m-3 has-background-danger'>
						<h3 className='has-text-white'>Infected: {cases.infected}</h3>
					</div>
					<div className='tile is-child box m-3 has-background-info'>
						<h3 className='has-text-white'>Tested: {cases.tested}</h3>
					</div>
					<div className='tile is-child box m-3 has-background-success'>
						<h3 className='has-text-white'>Recovered: {cases.recovered}</h3>
					</div>
				</div>
				<div className='tile is-parent is-vertical has-text-centered is-size-5'>
					<div className='tile is-child box m-3 has-background-black-ter '>
						<h3 className='has-text-white'>Deceased: {cases.deceased}</h3>
					</div>
					<div className='tile is-child box m-3 has-background-warning'>
						<h3 className='has-text-warning-dark'>
							Active Cases: {cases.activeCases}
						</h3>
					</div>
					<div className='tile is-child box m-3 has-background-warning-dark'>
						<h3 className='has-text-warning-light'>
							Unique Cases: {cases.unique}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalCasesData;
