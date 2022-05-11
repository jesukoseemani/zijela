import React from 'react';
import { Link } from 'react-router-dom';

function GetReady() {
	return (
		<div className='max-w-[1150px] m-auto px-10 xl:px-0'>
			<div className='flex flex-col lg:flex-row justify-between items-center my-[60px]'>
				<div className='flex-1'>
					<h2 className="font-['Poppins'] font-[500] text-[48px] text-gray-900 tracking-tight text-center sm:text-left">
						Ready to take a bold step?
					</h2>
					<p className="font-['Poppins'] font-[500] text-[15px] text-center lg:text-left text-gray-500">
						Let us prepare you for your next job in tech today.
					</p>
				</div>
				<div className='flex-1 flex justify-end space-x-5 mt-[30px] lg:mt-0'>
					<Link
						to='/contact'
						className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
						Schedule a Meeting
					</Link>

					<Link
						to='/register'
						className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#333F51] border border-solid border-gray-200 hover:bg-[#061b0e] hover:text-white">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}

export default GetReady;
