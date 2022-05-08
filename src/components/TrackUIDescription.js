import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/middle.png';

function TrackUIDescription() {
	return (
		<div className='max-w-[1440px] m-auto'>
			<div className='w-full mt-[88px] mb-[152px] flex justify-between items-center'>
				<div className='flex-1 '>
					<img src={Image1} alt='' />
				</div>

				<div className='flex-1 ml-[68px]'>
					<h2 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
						Learn <br /> UI/UX Design
					</h2>
					<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500 mt-8 mb-[25px]  ">
						With our integrated CRM, project management, collaboration and
						invoicing capabilities, you can manage every aspect of your business
						in one secure platform.
					</p>
					<div className='flex space-x-3'>
						<Link
							to=''
							className="bg-[#22C55E] px-[18px] py-3 rounded-md font-['Poppins'] font-[500] text-[16px] text-[#F0FDF4]">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrackUIDescription;
