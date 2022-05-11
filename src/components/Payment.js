import React from 'react';
import { Link } from 'react-router-dom';
import office from '../assets/office.svg';
import payment from '../assets/transfer.svg';

function Payment() { 
	return (
		<div className='max-w-[1150px] m-auto relative border-r border-b rounded-md mt-[160px] px-10 xl:px-0'>
			<div className='hidden sm:block w-1/2 border border-solid bg-[#22C55E] h-[150px] absolute top-[-75px] right-10 lg:right-0 rounded-xl '>
				<h2 className="font-['Poppins'] font-[500] text-[18px] text-gray-900 tracking-tight p-5">
					Need advice ?<br /> Contact our admissions team for help!
				</h2>
				<div className='mx-5 mt-10'>
					<Link
						to='/contact'
						className="px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[16px] text-gray-900 border border-solid border-[#22C55E] bg-white">
						Contact Us
					</Link>
				</div>
			</div>
			<div className='mt-[60px] w-full'>
				<h2 className="font-['Poppins'] font-[700] text-[30px] text-gray-900 tracking-tight my-[40px]">
					Payment Options
				</h2>
				<div className='flex items-start justify-start max-w-[500px] mx-auto'>
					<img src={office} alt='' />
					<div className='ml-5'>
						<h3 className="font-['Poppins'] font-[700] text-[20px] text-gray-900 tracking-tight mt-6">
							With Our Consultants
						</h3>
						<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 ">
							Make an appointment with one of our educational consultants and
							receive all the information you need to make the payment from your
							bank.
						</p>
					</div>
				</div>

				<div className='flex items-start my-[60px] justify-start max-w-[500px] mx-auto'>
					<img src={payment} alt='' />
					<div className='ml-5'>
						<h3 className="font-['Poppins'] font-[700] text-[20px] text-gray-900 tracking-tight mt-6">
							Wire Transfer
						</h3>
						<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 ">
							We use paystack to make payment swift and easy.
						</p>
					</div>
				</div>

				<div className='flex items-start my-[60px] justify-start max-w-[500px] mx-auto'>
					<Link
						to='/register'
						className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#F0FDF4]">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Payment;
