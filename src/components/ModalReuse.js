import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
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

function ModalReuse({ openModal, modalIsOpen, closeModal, link, title }) {
	const [message, setMessage] = useState('');
	const [active, setActive] = useState(false);
	const [values, setValues] = useState({
		email: '',
		firstname: '',
        link,
        title
	});
	const [disabled, setDisabled] = useState(true);

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		if (values.email !== '' && values.firstname !== '') {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [values]);

	const submitHandler = (e) => {
		e.preventDefault();
		setActive(true);

		try {
			emailjs
				.send(
					'service_bxlvdfw',
					'template_ss5aaeg',
					values,
					'lgaKS4Z8AW7qXOUjR'
				)
				.then((res) => {
					setActive(false);

					setMessage('Thank you, we will reach out to you via mail');
					document.querySelector('form').reset();

					setTimeout(() => {
						setMessage('');
					}, 1500);
				});
		} catch (err) {
			setActive(false);

			alert('failed to submit form');

			console.log(err);
		}
		setMessage('');
	};
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='syllabus'>
			<div className='modalbackground h-[99.8vh] scrollbar-hide px-10 xl:px-0'>
				<div
					className='flex justify-end p-5 cursor-pointer'
					onClick={closeModal}>
					<img src={times} alt='' className='w-20 h-20 ' />
				</div>
				<div className='flex flex-col xl:flex-row items-center xl:space-x-5 pt-[150px] xl:p-[150px]'>
					<div className='flex-1 mb-14 xl:mb-0'>
						<h2 className="font-['Poppins'] font-[700] text-[30px] sm:text-[38px] xl:text-[58px] text-gray-900 tracking-tight">
							Download the Syllabus of
							<br /> our program {title}
							
						</h2>
						<p className="font-['Poppins'] font-[500] text-[12px] xl:text-[16px] text-gray-800 ">
							Register and receive the Syllabus by Email.
						</p>
					</div>
					<form>
						<div className='flex flex-col items-start p-10 bg-[#F7F8F9] w-full sm:w-[510px] rounded-lg'>
							<div className='flex flex-col w-full my-6'>
								<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
									First Name
								</p>
								<input
									name='firstname'
									type='text'
									onChange={onChange}
									placeholder='YourName'
									className='py-5 pl-3 border border-solid text-[16px] border-[#D5DAE1] rounded-md mt-[8px]'
								/>
							</div>

							<div className='flex flex-col w-full my-6'>
								<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
									Email
								</p>
								<input
									name='email'
									type='text'
									onChange={onChange}
									placeholder='YourEmail@email.com'
									className='py-5 pl-3 border border-solid text-[16px] border-[#D5DAE1] rounded-md mt-[8px]'
								/>
							</div>

							<button
								disabled={disabled}
								type='submit'
								onClick={submitHandler}
								className='w-full bg-[#22C55E] outline-none text-[13px] disabled:opacity-10 rounded-md text-white py-[14px] my-12'>
								{active ? 'Submitting...' : 'Submit'}
							</button>
							<div
								className={`${
									message !== '' ? 'flex' : 'hidden'
								} bg-green-500 h-[30px] w-full rounded text-white justify-center items-center text-[15px] mt-2`}>
								<p className=''>{message}</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	);
}

export default ModalReuse;
