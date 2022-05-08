import React from 'react';
import { Link } from 'react-router-dom';

function GetStarted({ title, desc }) {
	return (
		<div className='flex flex-col justify-center items-center h-[430px]'>
			<h2 className="font-['Poppins'] font-[700] text-[36px] text-gray-900 tracking-tight">
				The fastest way to learn {title}
			</h2>
			<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500 mt-4 max-w-[919px] text-center">
				{desc}
			</p>
			<div className='mt-10'>
				<Link
					to=''
					className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
					Register
				</Link>
			</div>
		</div>
	);
}

export default GetStarted;
