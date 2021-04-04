import React from 'react';

const Header = ({ cases }) => {
	return (
		<div className='has-text-centered pv5 has-background-primary'>
			<h1 className='title is-1 title-font is-uppercase has-text-weight-semibold has-text-white text-shadow'>
				Covid-19 Tracker PH
			</h1>
			<h3 className='subtitle is-5 has-text-white mb-6'>
				Simplified Information Hub for PH Covid-19 Cases
			</h3>
		</div>
	);
};

export default Header;
