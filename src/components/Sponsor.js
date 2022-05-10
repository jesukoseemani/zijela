import React from 'react';
// import Image1 from '../assets/Logo (5).svg';
// import Image2 from '../assets/Logo (4).svg';
// import Image3 from '../assets/Logo (3).svg';
// import Image4 from '../assets/Logo (2).svg';
// import Image5 from '../assets/Logo (1).svg';
import Image1 from '../assets/ITEX.png';
import Image2 from '../assets/INFRACTURE.jpeg';
import Image3 from '../assets/MasterCard_Logo.svg.png';
import Image4 from '../assets/paystack-2.svg';
import Image5 from '../assets/RIBY.svg';

function Sponsor() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='mb-[90px]'>
				<p className="font-['Poppins'] font-[500] text-[16px] text-gray-300 mt-[88px] text-center">
					{' '}
					Trusted by the top companies in this industry
				</p>
				<div className='flex flex-wrap md:flex-nowrap items-center space-y-10 md:space-y-0 space-x-[40px] lg:space-x-[65px] md:space-x-[40px] mt-[24px] w-full justify-center'>
					<img
						src={Image1}
						alt=''
						className='w-[120px] max-w-[184px] md:w-[120px] h-[48px] object-contain '
					/>
					<img
						src={Image2}
						alt=''
						className='w-[120px] max-w-[184px] md:w-[120px] h-[48px] object-contain'
					/>
					<img
						src={Image3}
						alt=''
						className='w-[120px] max-w-[184px] md:w-[120px] h-[48px] object-contain'
					/>
					<img
						src={Image4}
						alt=''
						className='w-[120px] max-w-[184px] md:w-[120px] h-[48px] object-contain'
					/>
					<img
						src={Image5}
						alt=''
						className='w-[120px] max-w-[184px] md:w-[120px] h-[48px] object-contain'
					/>
				</div>
			</div>
		</div>
	);
}

export default Sponsor;
