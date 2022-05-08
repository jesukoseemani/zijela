import React from 'react';
import { Link } from 'react-router-dom';

function GetReady() {
	return (
		<div className='max-w-[1440px] m-auto'>
			<div className='flex justify-between items-center my-[60px]'>
				<div className='flex-1'>
					<h2 className="font-['Poppins'] font-[500] text-[48px] text-gray-900 tracking-tight">
						Ready to take a bold step?
					</h2>
					<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500">
						Let us prepare you for your next job in tech today.
					</p>
				</div>
				<div className='flex-1 flex justify-end space-x-5'>
					<Link
						to='/contact'
						className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
						Schedule a Meeting
					</Link>

					<Link
						to=''
						className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#333F51] border border-solid border-gray-200 hover:bg-[#061b0e] hover:text-white">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}

export default GetReady;
