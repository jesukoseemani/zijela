import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/picto3.png';
import check from '../assets/Checkbox.svg';

function HeroUx({ title, openModal }) {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full my-[50px] md:my-[125px] flex flex-col md:flex-row justify-between items-center px-10 xl:px-0'>
				<div className='flex-1 space-y-14'>
					<h2 className="font-['Poppins'] font-[700] text-[40px] md:text-[30px] xl:text-[60px] lg:text-[48px] text-gray-900 tracking-tight">
						Join 200+ students <br /> Learning {title}
					</h2>
					<div>
						<div className='flex space-x-3 items-center mb-4'>
							<div>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									One on one virtual mentoring.
								</p>
							</div>
						</div>
						<div className='flex space-x-3 items-center mb-4'>
							<div>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									Hands on projects
								</p>
							</div>
						</div>
						<div className='flex space-x-3 items-center mb-4'>
							<div>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									Internship/employment opportunities
								</p>
							</div>
						</div>
					</div>
					<div className='flex space-x-3'>
						<Link
							to='/register'
							className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
							Register
						</Link>

						<Link
							to=''
							onClick={openModal}
							className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#333F51] border border-solid border-gray-200 hover:bg-[#061b0e] hover:text-white">
							Download Syllabus
						</Link>
					</div>
				</div>
				<div className='flex-1 flex md:justify-end justify-center mt-14 md:mt-0'>
					<img src={Image1} alt='' />
				</div>
			</div>
		</div>
	);
}

export default HeroUx;
