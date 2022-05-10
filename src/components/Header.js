import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='w-full h-[80px] bg-white flex justify-between items-center px-2 md:px-10 xl:px-0'>
				<div></div>
				<div className='flex-1 flex space-x-5 justify-center md:space-x-10 items-center md:justify-end '>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-8 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
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
						Web <span className='hidden md:inline'>Development</span>
					</NavLink>
					<NavLink
						to='/ui_ux'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						UI/UX <span className='hidden md:inline'>Design</span>
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						About <span className='hidden md:inline'>Us</span>
					</NavLink>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							isActive
								? "bg-[#556987] px-4 py-2 rounded-md font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4]"
								: "font-['Poppins'] font-[500] text-[16px] text-[#556987]"
						}>
						Contact <span className='hidden md:inline'>Us</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
