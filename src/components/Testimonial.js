import React from 'react';
import CardTestimony from './CardTestimony';

function Testimonial() {
	const data = [
		{
			content:
				'I have always had passion for programming, however, I have found myself running a tutorial hell. I am priviledged to be a participant in the first cohort on Zijela web development training. It set my feet aright with guided learnings. I am forever grateful for this opportunity',
			name: 'Abiodun Adu',
			position: 'Cohurt 2021',
		},
		{
			content:
				'My experience with Zijela has been undoubtedly positive, making my journey and experience in the tech world a great one with their amazing mentors and instructors.I am very thankful to them for their kind support and perfect guidance through this stage.Zijela has a remarkable structure and adequate training skills for students.',
			name: 'Prince Ephraim',
			position: 'Cohurt 2021',
		},
		{
			content:
				'One of the best. it was a great experience and good foundation for my learning growth and development.',
			name: 'Damilare Arifo',
			position: 'Cohurt 2021',
		},
		// {
		// 	content:
		// 		'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
		// 	name: 'Oluwadolabomi',
		// 	position: 'Cohurt 2021',
		// },
		// {
		// 	content:
		// 		'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
		// 	name: 'Oluwadolabomi',
		// 	position: 'Cohurt 2021',
		// },
		// {
		// 	content:
		// 		'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
		// 	name: 'Oluwadolabomi',
		// 	position: 'Cohurt 2021',
		// },
	];
	return (
		<div className='bg-[#F7F8F9] mt-[88px] my-line '>
			<div className='max-w-[1150px] m-auto '>
				<h3 className="font-['Poppins'] font-[700] text-[30px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight pt-[126px] px-10 xl:px-0">
					Testimonial from Zijela Students
				</h3>
				<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500 px-10 xl:px-0">
					Here is what our elite scholars have to say about their experience at
					the academy.
				</p>
				<div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 lg:justify-center gap-5 py-[64px] px-10 xl:px-0'>
					{data.map((item) => (
						<CardTestimony item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
