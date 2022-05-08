import React from 'react';
import image from '../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg';

function HeroAbout() {
	return (
		<div className='max-w-[1440px] m-auto'>
			<div className='flex flex-col justify-center items-center mt-14'>
				<h2 className="font-['Poppins'] font-[500] text-[48px] text-gray-900 tracking-tight italic">
					Put Your Career First...
				</h2>
				<div className='my-10 w-full'>
					<img
						src={image}
						alt=''
						className='rounded-xl h-[600px] w-full object-cover'
					/>
				</div>
				<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 text-center">
					Our vision here at
					<span
						style={{ color: '#22C55E', fontWeight: 'bold', margin: '0 10px' }}>
						ZIJELA
					</span>
					is to train the talents of the future, and make sure that they can
					have the edge at the age of digitization and even benefit from it.
					<br /> This path will allow our
					<span
						style={{ color: '#22C55E', fontWeight: 'bold', margin: '0 10px' }}>
						STUDENTS
					</span>
					<br />
					to create a rich portfolio and acquire technical skills to add to your
					CV.
				</p>
			</div>
		</div>
	);
}

export default HeroAbout;
