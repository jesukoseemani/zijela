import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/picto2.png';

function TrackUIDescription() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full mt-[88px] mb-[152px] flex flex-col md:flex-row justify-between items-center px-10 xl:px-0'>
				<div className='flex-1 '>
					<img src={Image1} alt='' />
				</div>

				<div className='flex-1 mt-5 md:mt-0 md:ml-[68px]'>
					<h2 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
						Learn <br /> UI/UX Design
					</h2>
					<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500 mt-8 mb-[25px] ">
						Transform concepts and ideas into designs that influence business
						results and delve into the world of creating amazing digital
						products.
					</p>
					<div className='flex space-x-3'>
						<Link
							to='/ui_ux'
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
