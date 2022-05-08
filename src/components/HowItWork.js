import React from 'react'
import apply from '../assets/apply.svg'
import line from '../assets/linedesign.svg'

function HowItWork() {
  return (
		<div className='max-w-[1440px] m-auto '>
			<div>
				<h2 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
					How it works
				</h2>

				<div className='flex items-start justify-center space-x-5 mt-[60px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<img src={apply} alt='' />
						<img src={line} alt='' className='h-[280px] w-full'/>
					</div>
					<div className='flex flex-col space-y-5'>
						<h4 className="font-['Roboto'] font-[700] text-[30px] text-gray-900 tracking-tight">
							Apply
						</h4>
						<p className="font-['Roboto'] font-[700] text-[15px] text-gray-900 tracking-tight">
							Choose a pathway and apply to be assessed by our program
							facilitators. Successful applicants will be contacted via email.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowItWork