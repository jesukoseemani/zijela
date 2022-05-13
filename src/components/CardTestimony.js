import React from 'react';

function CardTestimony({ item }) {
	return (
		<div className='w-full lg:w-[359px] h-[604px] rounded-md bg-white flex flex-col items-start justify-between p-8'>
			<div>
				<h3 className="font-['Poppins'] font-[500] text-[24px] text-gray-900">
					{item.content}
				</h3>
			</div>
			<div>
				<h6 className="font-['Poppins'] font-[600] text-[16px] text-gray-800  ">
					{item.name}
				</h6>
				<p className="font-['Poppins'] font-[400] text-[18px] text-gray-400  ">
					{item.position}
				</p>
			</div>
		</div>
	);
}

export default CardTestimony;
