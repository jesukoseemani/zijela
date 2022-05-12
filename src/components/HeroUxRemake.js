import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/picto4.png';
import check from '../assets/Checkbox.svg';

function HeroUxRemake({ openModal }) { 
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full my-[50px] md:my-[125px] flex flex-col-reverse md:flex-row justify-between items-center px-10 xl:px-0'>
				<div className='flex-1 space-y-14'>
					<h2 className="font-['Poppins'] font-[700] text-[40px] md:text-[30px] xl:text-[60px] lg:text-[48px] text-gray-900 tracking-tight">
						Become a UI/UX Designer
					</h2>
					<div>
						<div className='flex space-x-3 items-start mb-4'>
							<div className='mt-1'>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									The UX Design course will allow you to acquire the knowledge
									<br />
									and tools necessary to understand
									<br /> the different principles of user experience design.
								</p>
							</div>
						</div>
						<div className='flex space-x-3 items-start mb-4'>
							<div className='mt-1'>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									You will learn how to carry out a good UX study,
									<br /> how to use the different types of processes in order to
									<br />
									conceptualize a final product in a user-centric perspective.
								</p>
							</div>
						</div>
						<div className='flex space-x-3 items-start mb-4'>
							<div className='mt-1'>
								<img src={check} alt='' />
							</div>
							<div>
								<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
									Learn to produce practical and effective User Interface (UI)
									designs.
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
				<div className='flex-1 md:justify-end justify-center mt-14 md:mt-0 rounded-lg'>
					<img
						src={Image1}
						alt=''
						className='w-[554px] h-[415px] object-cover'
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroUxRemake;
