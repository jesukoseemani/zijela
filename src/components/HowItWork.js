import React from 'react'
import { Link } from 'react-router-dom';
import apply from '../assets/apply.svg'
import match from '../assets/assessed.svg'
import onboarding from '../assets/admitted.svg';
import started from '../assets/started.svg';

import line from '../assets/linedesign.svg'

function HowItWork() { 
  return (
		<div className='max-w-[1150px] m-auto px-10 xl:px-0'>
			<div>
				<h2 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
					How it works
				</h2>

				<div className='flex items-start justify-center space-x-10 mt-[60px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<img src={apply} alt='' />
						<img src={line} alt='' className='h-[200px] w-full' />
					</div>
					<div className='flex flex-col mt-[10px]  '>
						<h4 className="font-['Roboto'] font-[700] text-[30px] text-gray-900 tracking-tight ">
							Register
						</h4>
						<p className="font-['Roboto'] font-[700] text-[15px] text-gray-900 tracking-tight">
							Choose a pathway and apply to get into the program.
						</p>
					</div>
				</div>

				<div className='flex items-start justify-center space-x-10 mt-[20px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<img src={onboarding} alt='' />
						<img src={line} alt='' className='h-[200px] w-full' />
					</div>
					<div className='flex flex-col mt-[10px]  '>
						<h4 className="font-['Roboto'] font-[700] text-[30px] text-gray-900 tracking-tight ">
							OnBoarding
						</h4>
						<p className="font-['Roboto'] font-[700] text-[15px] text-gray-900 tracking-tight">
							Choose a pathway and apply to get into the program.
						</p>
					</div>
				</div>

				<div className='flex items-start justify-center space-x-10 mt-[20px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<img src={match} alt='' />
						<img src={line} alt='' className='h-[200px] w-full' />
					</div>
					<div className='flex flex-col mt-[10px]  '>
						<h4 className="font-['Roboto'] font-[700] text-[30px] text-gray-900 tracking-tight ">
							Get Matched with Mentors
						</h4>
						<p className="font-['Roboto'] font-[700] text-[15px] text-gray-900 tracking-tight">
							Choose a pathway and apply to get into the program.
						</p>
					</div>
				</div>

				<div className='flex items-start justify-center space-x-10 mt-[20px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<img src={started} alt='' />
						{/* <img src={line} alt='' className='h-[200px] w-full' /> */}
					</div>
					<div className='flex flex-col mt-[10px]  '>
						<h4 className="font-['Roboto'] font-[700] text-[30px] text-gray-900 tracking-tight ">
							Get Started
						</h4>
						<p className="font-['Roboto'] font-[700] text-[15px] text-gray-900 tracking-tight">
							Choose a pathway and apply to get into the program.
						</p>

						<div className='mt-[50px]'>
							<Link
								to='/register'
								className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[15px] text-[#F0FDF4]">
								Start Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowItWork