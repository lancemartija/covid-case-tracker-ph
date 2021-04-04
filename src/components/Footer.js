import React from 'react';

const Footer = () => {
	return (
		<footer
			className='ph3 ph4-ns pv4 bt b--black-10 black-70'
			style={{ marginTop: '128px' }}
		>
			<h1 className='b f3 f2-ns black-70 lh-solid'>COVID-19 TRACKER PH</h1>
			<p className='f6 db b ttu lh-solid'>Developed by Lance Martija</p>
			<div className='mt5'>
				<a
					className='dim'
					href='https://github.com/lancemartija/covid-case-tracker-ph'
					title=''
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<svg
						className='link gray dib br-100 h2 mr3'
						data-icon='github'
						viewBox='0 0 32 32'
						style={{ fill: 'currentcolor' }}
					>
						<title>github icon</title>
						<path d='M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z'></path>
					</svg>
					<p className='link gray '>View on GitHub</p>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
