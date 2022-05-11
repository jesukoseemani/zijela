import React from 'react';
import { Link } from 'react-router-dom';

function Submitted() {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center px-10 xl:px-0'>
			<p className="font-['Poppins'] font-[500] text-[12px] text-[#22C55E] py-0.5 px-2 bg-[#DCFCE7] rounded-[36px] w-fit">
				Success
			</p>
			<h2 className="font-['Poppins'] text-center font-[700] text-[48px] text-gray-900 tracking-tight py-4">
				Application Successful!
			</h2>
			<p className="font-['Poppins'] text-center font-[500] text-[20px] text-gray-500  ">
				Your application has been received. Kindly check your inbox for next
				steps.
			</p>
			<Link
				to='/'
				className="bg-[#22C55E] px-[28px] py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4] mt-[60px]">
				Go Back To HomePage
			</Link>
		</div>
	);
}

export default Submitted;
