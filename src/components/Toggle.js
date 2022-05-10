import { motion } from 'framer-motion';
import React, { useState } from 'react';
import down from '../assets/chevron-down-outline (1).svg';
import up from '../assets/chevron-up-outline.svg';

const Toggle = ({ children, title }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<motion.div
			layout
			className="w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-900 tracking-tight pointer-cursor border my-6 py-6 px-6 bg-gray-200"
			onClick={() => setToggle(!toggle)}>
			<div className='flex justify-between mb-4 cursor-pointer'>
				<div className='flex items-center'>
					<motion.div className='w-[17px] h-[17px] border rounded-[50%] bg-[green] mr-4'></motion.div>
					<motion.h4
						layout
						className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-500 tracking-tight">
						{title}
					</motion.h4>
				</div>

				<motion.img
					src={toggle ? up : down}
					alt='plus/times'
					className='w-[30px] h-[30px]'
				/>
			</div>

			{toggle ? children : ''}
			{/* <div className='bg-[#c3c9d0] h-[2px] w-full my-8 '></div> */}
		</motion.div>
	);
};

export default Toggle;
