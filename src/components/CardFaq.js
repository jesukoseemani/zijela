import React from 'react';
import Image from '../assets/Outline.png';

function CardFaq({ item }) {
	return (
		<div className='w-[360px] h-[238px] flex flex-col justify-start items-start space-y-8'>
			<div className='p-2 rounded-[50%] bg-[#22C55E] flex items-center justify-center'>
				<img src={Image} alt='' />
			</div>

			<h2 className="font-['Poppins'] font-[700] text-[20px] text-gray-900">
				{item.question}
			</h2>
			<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
				{item.answer}
			</p>
		</div>
	);
}

export default CardFaq;
