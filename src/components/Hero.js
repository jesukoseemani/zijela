import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/top.png';

function Hero() {
	return (
		<div className='max-w-[1440px] m-auto'>
			<div className='w-full my-[125px] flex justify-between items-center'>
				<div className='flex-1'>
					<h2 className="font-['Poppins'] font-[700] text-[60px] text-gray-900 tracking-tight">
						Learn <br />
						in-demand tech skill & get a job.
					</h2>
					<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500 mt-6 mb-8  ">
						We train the next tech generation on UI/UX and web development. We
						help them get ready for the jobs with all they need to get them
						employed.
					</p>
					<div className='flex space-x-3'>
						<Link
							to=''
							className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
							Register to begin
						</Link>
						<Link
							to=''
							className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#333F51] border border-solid border-gray-200 hover:bg-[#061b0e] hover:text-white">
							Learn more
						</Link>
					</div>
				</div>
				<div className='flex-1 flex justify-end'>
					<img src={Image1} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Hero;
