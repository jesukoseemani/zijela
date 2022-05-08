import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../assets/gmh (1) 1.png';
import { useNavigate } from 'react-router';

function Header() {
	const navigate = useNavigate();
	return (
		<div className='max-w-[1440px] m-auto'>
			<div className='w-full h-[80px] bg-white flex justify-between items-center'>
				<div></div>
				<div className='flex flex-1 space-x-10 items-center justify-end'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						Home
					</NavLink>
					<NavLink
						to='/web_development'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						Web Development
					</NavLink>
					<NavLink
						to='/ui_ux'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						UI/UX Design
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						About Us
					</NavLink>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						Contact Us
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
