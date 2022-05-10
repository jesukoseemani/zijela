import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/undraw_experience_design_eq-3-j.svg';
import check from '../assets/Checkbox.svg';
import { AnimateSharedLayout } from 'framer-motion';
import Toggle from './Toggle';

function WhatToLearnUx({ openModal }) {
	return (
		<div className='max-w-[1150px] m-auto relative px-10 xl:px-0'>
			<div className='flex flex-col-reverse lg:flex-row lg:space-x-20'>
				<div className='flex-1'>
					<img
						src={image}
						alt=''
						className='w-full h-[556px] object-cover object-top'
					/>
					<div className='mt-5'>
						<h2 className="font-['Poppins'] font-[700] text-[30px] text-gray-900 tracking-tight mt-[40px]">
							What you will learn:
						</h2>
						<div className='mt-[40px]'>
							<div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
										WIREFRAME.
									</p>
								</div>
							</div>
							<div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
										MOCKUP.
									</p>
								</div>
							</div>
							<div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
										BUILD SINGLE PAGE APPS (SPAS).
									</p>
								</div>
							</div>
							<div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
										PROTOTYPE.
									</p>
								</div>
							</div>
							<div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[20px] text-gray-500">
										SOFTWARE.
									</p>
								</div>
							</div>
							{/* <div className='flex space-x-3 items-center mb-10'>
								<div>
									<img src={check} alt='' />
								</div>
								<div>
									<p className="font-['Poppins'] font-[500] text-[20px] text-gray-500">
										WRITE REUSABLE, SHARED LOGIC FOR USE IN APPLICATION.
										ECOSYSTEM
									</p>
								</div>
							</div> */}
						</div>
					</div>
					{/* //shared */}

					<h3 className="font-['Poppins'] font-[700] text-[20px] md:text-[20px] lg:text-[30px] text-gray-900 tracking-tight mt-[100px]">
						Our Course Content Summary
					</h3>
					<div className='mt-[50px]'>
						<AnimateSharedLayout>
							<Toggle title='Understanding UIUX design'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>Definitions</li>
										<li>Who exactly are UIUX designers?</li>
										<li>What UIUX designers do?</li>
									</p>
								</div>
							</Toggle>

							<Toggle title='User research/Userflows'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>Creating a user research plan with Google forms</li>
										<li>Creating personas</li>
										<li>Discovering pain points</li>
										<li>Designing Userflows/Site-maps</li>
									</p>
								</div>
							</Toggle>
							<Toggle
								title=' Information architecture (IA)
'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>Foundation of Information architecture</li>
										<li>Design principles</li>
									</p>
								</div>
							</Toggle>
							<Toggle title='Sketching'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>Sketching wireframes with pen and paper</li>
										<li>Creating lo-fi wireframes with Balsamiq</li>
									</p>
								</div>
							</Toggle>
							<Toggle
								title='Visual design
'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>Typography</li>
										<li>Color theory</li>
										<li>Plugins for images, icons and illustrations</li>
									</p>
								</div>
							</Toggle>

							<Toggle title='Prototyping'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>User testing with functioning prototypes</li>
									</p>
								</div>
							</Toggle>

							<Toggle title=' Projects & Portfolio building'>
								<div className="py-2 w-full font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[17px] text-gray-800 tracking-tight">
									<p className='py-4'>
										<li>
											Building tons of projects and building personal portfolio.
										</li>
									</p>
								</div>
							</Toggle>
						</AnimateSharedLayout>
					</div>

					<div className='mt-[50px]'>
						<Link
							to=''
							onClick={openModal}
							className="bg-[#FFFFFF] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[18px] text-[#181a1f] border border-solid border-gray-500 hover:bg-[#22C55E] hover:text-[#F0FDF4]">
							Download Syllabus
						</Link>
					</div>

					{/* end */}
				</div>
				<div className='h-[454px] lg:max-w-[554px] p-8 flex-1 border lg:sticky lg:top-4 rounded-xl bg-gray-200'>
					<div className=''>
						<h3 className="font-['Poppins'] font-[700] text-[30px] text-gray-900 tracking-tight">
							Course Description
						</h3>
						<div className='flex my-10'>
							<h6 className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900">
								Date:
							</h6>
							<p className="font-['Poppins'] font-[400] text-[15px] md:text-[15px] lg:text-[18px] text-gray-500 ml-4">
								1st June, 2022
							</p>
						</div>
						<div className='flex my-10'>
							<h6 className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900">
								Duration:
							</h6>
							<p className="font-['Poppins'] font-[400] text-[15px] md:text-[15px] lg:text-[18px] text-gray-500 ml-4">
								Three(3) months
							</p>
						</div>
						<div className='flex my-10'>
							<h6 className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900">
								Time:
							</h6>
							<p className="font-['Poppins'] font-[400] text-[15px] md:text-[15px] lg:text-[18px] text-gray-500 ml-4">
								Weekly
							</p>
						</div>
						<div className='flex my-10'>
							<h6 className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900">
								Venue:
							</h6>
							<p className="font-['Poppins'] font-[400] text-[15px] md:text-[15px] lg:text-[18px] text-gray-500 ml-4">
								Zoom Virtual Call & JetBrain
							</p>
						</div>
						<div className='flex my-10'>
							<h6 className="font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900">
								Price:
							</h6>
							<p className="font-['Poppins'] font-[900] text-[15px] md:text-[15px] lg:text-[18px] text-gray-900 ml-4">
								₦50,000
							</p>
						</div>
					</div>

					<div className='mt-[60px] md:mt-[60px] lg:mt-[40px]'>
						<Link
							to='/register'
							className="bg-[#22C55E] px-7 py-4 rounded-md font-['Poppins'] font-[500] text-[15px] md:text-[15px] lg:text-[18px] text-[#F0FDF4]">
							Register Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatToLearnUx;
