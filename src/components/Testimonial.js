import React from 'react';
import CardTestimony from './CardTestimony';

function Testimonial() {
	const data = [
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
		{
			content:
				'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
			name: 'Oluwadolabomi',
			position: 'Cohurt 1957',
		},
	];
	return (
		<div className='bg-[#F7F8F9] mt-[88px] my-line '>
			<div className='max-w-[1440px] m-auto'>
				<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight pt-[126px]">
					Testimonial from Zijela Students
				</h3>
				<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500  ">
					With Flex, you can build websites without writing code.
				</p>
				<div className='grid grid-cols-3 gap-5 py-[64px] '>
					{data.map((item) => (
						<CardTestimony item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
