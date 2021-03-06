import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import ReUseHeader from './ReUseHeader';
import email from '../assets/email.svg';
import phone from '../assets/Telephone.svg';
import location from '../assets/Location.svg';
import social from '../assets/social.svg';
import facebook from '../assets/FacebookC.svg';
import twitter from '../assets/TwitterC.svg';
import instagram from '../assets/InstagramC.svg';
import linkedIn from '../assets/LinkedInC.svg';
import Modal from 'react-modal';
import imagemessage from '..//assets/messageImage.svg';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		padding: '30px',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: '600px',
		width: '95%',
		backgroundColor: '#20202b',
		// height: '100%',
		borderRadius: '10px',
	},
};

function ContactForm() {
	const [message, setMessage] = useState('');
	const [active, setActive] = useState(false);
	const [values, setValues] = useState({
		message: '',
		email: '',
		firstname: '',
	});
	const [modalIsOpen, setIsOpen] = useState(false);
	const [disabled, setDisabled] = useState(true);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (
			values.message !== '' &&
			values.email !== '' &&
			values.firstname !== ''
		) {
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
					'service_cy390zb',
					'template_ebm08ze',
					values,
					'user_sdimx2A5fRhfzz24bzq1l'
				)
				.then((res) => {
					setActive(false);

					setMessage('Thank you, we will reach out soon');
					openModal();
					document.querySelector('form').reset();
				});
		} catch (err) {
			setActive(false);

			alert('failed to submit form');

			console.log(err);
		}
		setMessage('');
	};
	return (
		<div className='max-w-[1150px] m-auto px-10 xl:px-0'>
			<ReUseHeader
				title='CONTACT'
				description='Let???s stay connected'
				descriptionContent="It's never been easier to get in touch with ZIJELA. Call us or email and we'll get back to you as soon as possible!"
			/>

			{/* <div
				className={`${
					message !== '' ? 'flex' : 'hidden'
				} bg-green-500 h-[40px] w-full rounded text-white justify-center items-center text-[15px] mt-5`}>
				<p className=''>{message}</p>
			</div> */}

			<div className='flex flex-col md:flex-row justify-center items-center my-[44px] sm:my-[88px]'>
				<div className='flex-1 flex flex-wrap'>
					<div className='w-1/2 h-full md:w-[261px] md:h-[156px] mt-5 flex flex-col justify-start items-start space-y-8'>
						<div className='p-2 rounded-[50%] bg-[#22C55E] flex items-center justify-center'>
							<img src={email} alt='' />
						</div>

						<h2 className="font-['Poppins'] font-[700] text-[20px] text-gray-900">
							Email
						</h2>
						<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
							training@zijela.com
						</p>
					</div>

					<div className='w-1/2 h-full md:w-[261px] md:h-[156px] mt-5 flex flex-col justify-start items-start space-y-8'>
						<div className='p-2 rounded-[50%] bg-[#22C55E] flex items-center justify-center'>
							<img src={phone} alt='' />
						</div>

						<h2 className="font-['Poppins'] font-[700] text-[20px] text-gray-900">
							Phone
						</h2>
						<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
							+234 813 677 6626
						</p>
					</div>

					<div className='w-1/2 h-full md:w-[261px] md:h-[156px] mt-5 flex flex-col justify-start items-start space-y-8'>
						<div className='p-2 rounded-[50%] bg-[#22C55E] flex items-center justify-center'>
							<img src={location} alt='' />
						</div>

						<h2 className="font-['Poppins'] font-[700] text-[20px] text-gray-900">
							Office
						</h2>
						<p className="font-['Poppins'] font-[500] text-[16px] text-gray-500  ">
							6A Ogundare Awise St, Gbagada 234100, Lagos
						</p>
					</div>

					<div className='w-1/2 h-full md:w-[261px] md:h-[156px] mt-5 flex flex-col justify-start items-start space-y-8'>
						<div className='p-2 rounded-[50%] bg-[#22C55E] flex items-center justify-center'>
							<img src={social} alt='' />
						</div>

						<h2 className="font-['Poppins'] font-[700] text-[20px] text-gray-900">
							Socials
						</h2>
						<div className='flex-1 flex space-x-8 items-center justify-end'>
							<li className='list-none'>
								<a href='https://www.facebook.com/zijelaict/'>
									<img src={facebook} alt='' />
								</a>
							</li>
							<li className='list-none'>
								<a href='https://twitter.com/zijela?s=09'>
									<img src={twitter} alt='' />
								</a>
							</li>
							<li className='list-none'>
								<a href='https://www.instagram.com/zijela_ict/'>
									<img src={instagram} alt='' />
								</a>
							</li>
							<li className='list-none'>
								<a href='https://www.linkedin.com/company/zijela/'>
									<img src={linkedIn} alt='' />
								</a>
							</li>
						</div>
					</div>
				</div>
				<div className='w-full mt-14 md:mt-0 flex-1 flex flex-col items-start p-10 bg-[#F7F8F9] h-[512px]'>
					<form className='w-full'>
						<div className='flex flex-col w-full'>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
								first Name
							</p>
							<input
								name='firstname'
								type='text'
								placeholder='Enter your name please'
								onChange={onChange}
								className='py-6 pl-3 border text-[16px] border-solid border-[#D5DAE1] rounded-md mt-[6px]'
							/>
						</div>

						<div className='flex flex-col w-full mt-1'>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
								Email
							</p>
							<input
								name='email'
								type='text'
								placeholder='YourEmail@email.com'
								onChange={onChange}
								className='py-6 pl-3 border text-[16px] border-solid border-[#D5DAE1] rounded-md mt-[6px]'
							/>
						</div>
						<div className='flex flex-col mt-5 w-full'>
							<p className="font-['Poppins'] font-[500] text-[16px] text-gray-800  ">
								Message
							</p>
							<textarea
								name='message'
								rows='7'
								maxlength='200'
								onChange={onChange}
								className='py-2 pl-2 border text-[16px] border-solid border-[#D5DAE1] rounded-md mt-[6px]'
							/>
						</div>

						<button
							disabled={disabled}
							type='submit'
							onClick={submitHandler}
							className='w-full bg-[#22C55E] outline-none rounded-md text-white py-[14px] text-[18px] mt-14 disabled:opacity-10 '>
							{active ? 'Submitting...' : 'Send'}
						</button>
					</form>
				</div>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='message'>
				<div className='grid place-items-center my-[20px]'>
					<img className='wrapper_img' src={imagemessage} alt='' />
					<h2 className="font-['Poppins'] font-[600] text-[18px] text-white tracking-tight my-2 text-center">
						Success!
					</h2>
					<p className="font-['Poppins'] my-1 font-[500] text-[14px] text-white ">
						{message}
					</p>
				</div>
			</Modal>
		</div>
	);
}

export default ContactForm;
