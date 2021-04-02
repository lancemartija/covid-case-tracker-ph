import React from 'react';

const Header = ({ cases }) => {
	return (
		<div className='has-text-centered p-6 has-background-primary'>
			<h1 className='title is-1 title-font is-uppercase has-text-weight-semibold has-text-white text-shadow'>
				Covid-19 Tracker PH
			</h1>
			<h3 className='subtitle is-5 has-text-white'>
				Simplified Information Hub for PH Covid-19 Cases
			</h3>
			<h3 className='is-size-6 p-3 has-text-white'>
				(Last Updated: {cases.lastUpdatedAtApify})
			</h3>
		</div>
	);
};

export default Header;
