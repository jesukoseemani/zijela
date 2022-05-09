import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg';

function HeroAbout() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full my-[125px] flex justify-between items-center'>
				<div className='flex-1'>
					<h2 className="font-['Poppins'] font-[700] text-[60px] text-gray-900 tracking-tight">
						Put Your Career
						<br /> First...
					</h2>
					<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500 mt-6 mb-8  ">
						Our vision here at
						<span
							style={{
								color: '#22C55E',
								fontWeight: 'bold',
								margin: '0 10px',
							}}>
							ZIJELA
						</span>
						is to train the talents of the future, and make sure that they can
						have the edge at the age of digitization and even benefit from it.
						<br /> This path will allow our
						<span
							style={{
								color: '#22C55E',
								fontWeight: 'bold',
								margin: '0 10px',
							}}>
							STUDENTS
						</span>
						to create a rich portfolio and acquire technical skills to add to
						your CV.
					</p>
					<div className='flex space-x-3'>
						<Link
							to='/register'
							className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
							Register to begin
						</Link>
					</div>
				</div>
				<div className='flex-1 flex justify-end '>
					<img
						src={image}
						alt=''
						className='w-[554px] h-[464px] object-cover rounded-[10px]'
					/>
				</div>
			</div>
		</div>
		// <div className='max-w-[1440px] m-auto'>
		// 	<div className='flex flex-col justify-center items-center mt-14'>
		// 		<h2 className="font-['Poppins'] font-[500] text-[48px] text-gray-900 tracking-tight italic">
		// 			Put Your Career First...
		// 		</h2>
		// 		<div className='my-10 w-full'>
		// 			<img
		// 				src={image}
		// 				alt=''
		// 				className='rounded-xl h-[600px] w-full object-cover'
		// 			/>
		// 		</div>
		// 		<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 text-center">
		// 			Our vision here at
		// 			<span
		// 				style={{ color: '#22C55E', fontWeight: 'bold', margin: '0 10px' }}>
		// 				ZIJELA
		// 			</span>
		// 			is to train the talents of the future, and make sure that they can
		// 			have the edge at the age of digitization and even benefit from it.
		// 			<br /> This path will allow our
		// 			<span
		// 				style={{ color: '#22C55E', fontWeight: 'bold', margin: '0 10px' }}>
		// 				STUDENTS
		// 			</span>
		// 			<br />
		// 			to create a rich portfolio and acquire technical skills to add to your
		// 			CV.
		// 		</p>
		// 	</div>
		// </div>
	);
}

export default HeroAbout;
