import React from 'react';
import Image1 from '../assets/last.png';

function ShowData() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<div>
				<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
					We believe in the power of data
				</h3>
				<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500  ">
					Flex is the only business platform that lets you run your business on
					one <br /> platform, seamlessly across all digital channels.
				</p>
				<div className='flex items-center '>
					<div className='flex-1 flex items-center justify-start flex-wrap'>
						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
								2300
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Trainess
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								Here you can talk about any people you’ve trained
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center ml-8 mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
								100
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Projects
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								{' '}
								Here the projects the students have worked on
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
								1500
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Employed
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								The students that are employed and blah blah{' '}
							</p>
						</div>

						<div className='w-[262px] h-[162px] flex flex-col justify-center items-center text-center ml-8 mt-8'>
							<h3 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
								300
							</h3>
							<p className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
								Partners
							</p>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
								Companies you partner with to get employment for students.
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
