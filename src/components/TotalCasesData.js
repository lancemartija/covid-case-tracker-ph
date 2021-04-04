import React from 'react';

const TotalCasesData = ({ cases }) => {
	return (
		<div className='pt-6 pb-6'>
			<div className='title is-4 has-text-centered mb-6'>
				<h1 className='title-font title is-1'>TOTAL CASES</h1>
				<h1 className='subtitle is-5'>
					Date updated: {cases.data.timeline[0].date}
				</h1>
			</div>
			<div className='tile is-ancestor ml-6 mr-6'>
				<div className='tile is-parent is-vertical has-text-centered is-size-5'>
					<div className='tile is-child box m-3 has-background-danger'>
						<h3 className='has-text-white'>
							Infected: {cases.data.latest_data.confirmed}
						</h3>
					</div>
					<div className='tile is-child box m-3 has-background-success'>
						<h3 className='has-text-white'>
							Recovered: {cases.data.latest_data.recovered}
						</h3>
					</div>
				</div>
				<div className='tile is-parent is-vertical has-text-centered is-size-5'>
					<div className='tile is-child box m-3 has-background-black-ter '>
						<h3 className='has-text-white'>
							Deceased: {cases.data.latest_data.deaths}
						</h3>
					</div>
					<div className='tile is-child box m-3 has-background-warning'>
						<h3 className='has-text-warning-dark'>
							Active Cases: {cases.data.latest_data.critical}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalCasesData;
