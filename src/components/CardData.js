import React from 'react';

const CardData = ({ region, cases, recovered, deaths }) => {
	return (
		<div className='box tc bg-light-blue dib m-2 black'>
			<h1 className='title title-font f3 text-shadow'>{region}</h1>
			<h1 className='title f4'>Cases: {cases}</h1>
			<h1 className='title f4'>Recovered: {recovered}</h1>
			<h1 className='title f4'>Deaths: {deaths}</h1>
		</div>
	);
};

export default CardData;
