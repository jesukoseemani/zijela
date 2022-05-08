import React from 'react'
import ReUseHeader from './ReUseHeader';
import image from '../assets/team.png'

function Team() {

	const data = [
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'CEO & Founder',
		},
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'BackEnd Developer',
		},
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'Mobile Developer',
		},
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'UI/UX Rubbish',
		},
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'CEO & Founder',
		},
		{
			name: 'Macauley Herring',
			image: `${image}`,
			position: 'CEO & Founder',
		},
	];
  return (
		<div className='max-w-[1440px] m-auto'>
			<ReUseHeader
				title='TEAM'
				description='Meet our team'
				descriptionContent='Highly professional and capable of running your business across all digital channels.'
			/>
			<div className='grid grid-cols-3 py-[64px] gap-4 justify-items-center '>
				{data.map((item) => (
					<div className='w-[359px] rounded-md bg-white flex flex-col items-start justify-between '>
						<div>
							<img src={item.image} alt='' />
						</div>
						<div>
							<h6 className="font-['Poppins'] font-[600] text-[36px] text-gray-900  ">
								{item.name}
							</h6>
							<p className="font-['Poppins'] font-[400] text-[18px] text-[#22C55E]  ">
								{item.position}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Team