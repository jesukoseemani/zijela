import React from 'react';
import Image1 from '../assets/last.png';

function ShowData() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='px-10 xl:px-0'>
				{/* <h3 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight ">
					We believe in the power of data
				</h3>
				<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500  ">
					Flex is the only business platform that lets you run your business on
					one <br /> platform, seamlessly across all digital channels.
				</p> */}
				<div className='flex items-center flex-col md:flex-row'>
					<div className='flex-1 flex items-center justify-start flex-wrap'>
						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
								+300
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Trainess
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								Students trained on the most trendy technologies on the market.
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center ml-8 mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
								100
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Projects
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
							
								We undergo 60days of coding challenges, creating real-world projects
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
								+100
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Employed
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								We have students who works with growing startups & big firms.
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center ml-8 mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[35px] md:text-[35px] lg:text-[48px] text-gray-900 tracking-tight">
								+50
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Partners
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								We have quite a number of recruiting partners who trust our students.
							</p>
						</div>
					</div>
					<div className='flex-1 flex justify-end'>
						<img src={Image1} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShowData;
