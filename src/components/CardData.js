import React from 'react';

const CardData = ({ region, cases, recovered, deaths }) => {
	return (
		<div className='box tc has-background-info-dark dib m-2 white pb5'>
			<h1 className='title is-4 title-font f3 text-shadow white'>{region}</h1>
			<p className='f4' style={{ display: 'inline-block', textAlign: 'left' }}>
				Cases: {cases}
				<br />
				Recovered: {recovered}
				<br />
				Deaths: {deaths}
			</p>
		</div>
	);
};

export default CardData;
