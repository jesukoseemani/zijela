import React from 'react';
import Modal from 'react-modal';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import HeroUx from '../components/HeroUx';
import Payment from '../components/Payment';
import WhatToLearnWeb from '../components/WhatToLearnWeb';
import times from '../assets/close-outline (1).svg';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		padding: '0px',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		height: '100%',
	},
};

function Wb() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className='w-full m-auto'>
			<Header />
			<HeroUx title='Web Development' openModal={openModal} />
			<GetStarted
				title='Web Development'
				desc='In this course, you would be taught the fundamentals of the web using HTML and CSS, and advance progressively to complex JavaScript frameworks, such as React and also learning how to collaborate with other developers using Git.'
			/>
			<WhatToLearnWeb openModal={openModal} />
			<Payment />
			<Footer />

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='syllabus'>
				<div className='modalbackground h-[99.8vh] scrollbar-hide'>
					<div
						className='flex justify-end p-5 cursor-pointer'
						onClick={closeModal}>
						<img src={times} alt='' className='w-20 h-20 ' />
					</div>
					<div className='flex items-center space-x-5 p-[150px]'>
						<div className='flex-1 '>
							<h2 className="font-['Poppins'] font-[700] text-[58px] text-gray-900 tracking-tight">
								Download the Syllabus of
								<br /> our program Front-end
								<br /> with ReactJS
							</h2>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800 ">
								Register and receive the Syllabus by Email.
							</p>
						</div>

						<div className='flex flex-col items-start p-10 bg-[#F7F8F9] w-[510px] rounded-lg'>
							<div className='flex flex-col w-full my-6'>
								<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
									First Name
								</p>
								<input
									name='firstname'
									type='text'
									placeholder='YourName'
									className='py-5 pl-3 border border-solid border-[#D5DAE1] rounded-md mt-[8px]'
								/>
							</div>

							<div className='flex flex-col w-full my-6'>
								<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
									Email
								</p>
								<input
									name='email'
									type='text'
									placeholder='YourEmail@email.com'
									className='py-5 pl-3 border border-solid border-[#D5DAE1] rounded-md mt-[8px]'
								/>
							</div>

							<button className='w-full bg-[#22C55E] outline-none rounded-md text-white py-[14px] my-12'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default Wb;
