import React from 'react';

const CardData = ({ region, cases, recovered, deaths }) => {
	return (
		<div className='tc m-2 pb4'>
			<h1 className='title is-4 title-font f3 text-shadow'>{region}</h1>
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
