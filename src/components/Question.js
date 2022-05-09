import React from 'react'
import { Link } from 'react-router-dom';

function Question() {
  return (
		<div className='h-[430px] flex items-center justify-center flex-col'>
			<h2 className="font-['Poppins'] font-[700] text-[36px] text-gray-900 tracking-tight ">
				Any Question?
			</h2>
			<Link
				to='/contact'
				className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4] mt-[30px]">
				Contact Us
			</Link>
		</div>
	);
}

export default Question