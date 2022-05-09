import React from 'react';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg';
import instagram from '../assets/Instagram.svg';
import linkedIn from '../assets/LinkedIn.svg';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			{/* <div className='mt-[88px] '>
				<div className='max-w-[1440px] m-auto flex items-center justify-end space-x-12'>
					<Link
						to=''
						className="font-['Poppins'] font-[500] text-[14px] text-[#556987]">
						Web Development
					</Link>
					<Link
						to=''
						className="font-['Poppins'] font-[500] text-[14px] text-[#556987]">
						UI/UX Design
					</Link>
					<Link
						to=''
						className="font-['Poppins'] font-[500] text-[14px] text-[#556987]">
						About
					</Link>
					<Link
						to=''
						className="font-['Poppins'] font-[500] text-[14px] text-[#556987]">
						Contact Us
					</Link>
				</div>
			</div> */}
			<div className='my-line mt-[88px] '>
				<div className='max-w-[1150px] m-auto flex justify-between items-start h-[211px] pt-8 z-50'>
					<div className='flex-1 '>
						<p className="font-['Poppins'] font-[500] text-[14px] text-[#000000] ">
							© 2021 Flex. All rights reserved.
						</p>
					</div>

					<div className='flex-1 flex space-x-8 items-center justify-end'>
						<li className='list-none'>
							<a href='https://www.facebook.com/zijelaict/'>
								<img src={facebook} alt='' />
							</a>
						</li>
						<li className='list-none'>
							<a href='https://twitter.com/zijela?s=09'>
								<img src={twitter} alt='' />
							</a>
						</li>
						<li className='list-none'>
							<a href='https://www.instagram.com/zijela_ict/'>
								<img src={instagram} alt='' />
							</a>
						</li>
						<li className='list-none'>
							<a href='https://www.linkedin.com/company/zijela/'>
								<img src={linkedIn} alt='' />
							</a>
						</li>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
