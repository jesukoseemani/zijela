import React from 'react';

function ReUseHeader({ title, description, descriptionContent }) {
	return (
		<>
			<div className='flex justify-between items-center h-[150px] mt-[88px]'>
				<div className='flex-2'>
					<p className="font-['Poppins'] font-[500] text-[12px] text-[#22C55E] py-0.5 px-2 bg-[#DCFCE7] rounded-[36px] w-fit">
						{title}
					</p>
					<h2 className="font-['Poppins'] font-[700] text-[35px] sm:text-[35px] md:text-[48px] text-gray-900 tracking-tight ">
						{description}
					</h2>
					<p className="font-['Poppins'] font-[500] text-[15px] sm:text-[15px] md:text-[20px] text-gray-500 sm:w-[689px] w-full">
						{descriptionContent}
					</p>
				</div>

				<div className='flex-1'>
					{/* <div className='flex space-x-3 justify-end items-center'>
						<Link
							to=''
							className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
							Get Started
						</Link>
						<Link
							to=''
							className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#333F51] border border-solid border-gray-200 hover:bg-[#061b0e] hover:text-white">
							About Us
						</Link>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default ReUseHeader;
