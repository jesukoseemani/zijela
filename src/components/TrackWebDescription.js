import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/middle.png';

function TrackWebDescription() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full mt-[88px] mb-[152px] flex flex-col md:flex-row justify-between items-center px-10 xl:px-0'>
				<div className='flex-1 mr-[68px]'>
					<h2 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
						Learn <br /> Web Development
					</h2>
					<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500 mt-8 mb-[25px]  ">
						Learn the nuance of the web and create user-centered and efficient
						web pages to solve real-world problems.
					</p>
					<div className='flex space-x-3'>
						<Link
							to='/web_development'
							className="bg-[#22C55E] px-[18px] py-3 rounded-md font-['Poppins'] font-[500] text-[16px] text-[#F0FDF4]">
							Get Started
						</Link>
					</div>
				</div>
				<div className='flex-1 mt-14 md:mt-0 '>
					<img src={Image1} alt='' />
				</div>
			</div>
		</div>
	);
}



export default TrackWebDescription;
