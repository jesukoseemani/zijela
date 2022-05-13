import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import line from '../assets/linedesign.svg';
import PersonalDetails from './PersonalDetails';
import image from '../assets/undraw_code_thinking_re_gka2 (1).svg';
import useForm from './useForm';
import { validate, validateInfoFirst } from './validateInfo';
import ProfessionalExperience from './ProfessionalExperience';
import Device from './Device';
import MoreAbout from './MoreAbout';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import emailjs from 'emailjs-com';

function Application() {
	const [page, setPage] = useState(0);
	const [active, setActive] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formOneError, setFormOneError] = useState();
	const [formSOne, setFormSOne] = useState();
	const [isTrack, setIsTrack] = useState('');
	const [isAmount, setIsAmount] = useState('');
	const [message, setMessage] = useState('');
	const [detailRes, setDetailRes] = useState({
		email: '',
		track: '',
	});
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		gender: '',
		age_range: '',
		country: '',
		state: '',
		category: '',
		course_study: '',
		program_experience: '',
		device: '',
		own_laptop: '',
		good_internet: '',
		employed: '',
		studying_prof: '',
		comment: '',
	});

	const handleChangeDetails = (e) => {
		const { name, value } = e.target;
		setDetailRes({
			...detailRes,
			[name]: value,
		});
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const navigate = useNavigate();

	useEffect(() => {
		const formOne = JSON.parse(localStorage.getItem('formOne'));
		if (formOne && formOne.track !== '' && formOne.email !== '') {
			setActive(true);
			setFormSOne(formOne);
		}
	}, []);

	useEffect(() => {
		if (formSOne && formSOne.track === 'web development') {
			setIsTrack('Web Development');
			setIsAmount('₦200,000');
		} else {
			setIsTrack('UI/UX Design');
			setIsAmount('₦50,000');
		}
	}, [formSOne]);

	// function submitForm() {
	// 	setIsSubmitted(true);
	// }

	// const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
	// 	submitForm,
	// 	validate
	// );

	const usersCollectionRef = collection(db, 'users');

	const handleSwitch = (e) => {
		e.preventDefault();
		// setErrors(validate(values));
		setFormOneError(
			validateInfoFirst({ track: detailRes.track, email: detailRes.email })
		);
		if (detailRes.track !== '' && detailRes.email !== '') {
			setActive(true);
			localStorage.setItem(
				'formOne',
				JSON.stringify({ track: detailRes.track, email: detailRes.email })
			);
		}
		// console.log('values:', { track: values.track, email: values.email });
	};

	const createUser = async () => {
		setLoading(true);
		await addDoc(usersCollectionRef, {
			...values,
			emailAddress: formSOne.email,
			tracks: formSOne.track,
		});
		await emailjs.send(
			'service_bxlvdfw',
			'template_7606e7t',
			{
				...values,
				track: isTrack,
				amount: isAmount,
				emailAddress: formSOne.email,
				tracks: formSOne.track,
			},
			'lgaKS4Z8AW7qXOUjR'
		);
		setLoading(false);
		navigate('/success');
		window.localStorage.clear();
	};

	const FormTitles = [
		'Personal Info',
		'Professional Experience',
		'Device Information',
		'More about you',
	];

	const PageDisplay = () => {
		if (page === 0) {
			return (
				<PersonalDetails
					setValues={setValues}
					values={values}
					formOne={formSOne}
					onChange={onChange}
				/>
			);
		} else if (page === 1) {
			return (
				<ProfessionalExperience
					values={values}
					setValues={setValues}
					formOne={formSOne}
					onChange={onChange}
				/>
			);
		} else if (page === 2) {
			return (
				<Device
					values={values}
					setValues={setValues}
					formOne={formSOne}
					onChange={onChange}
				/>
			);
		} else {
			return (
				<MoreAbout
					values={values}
					setValues={setValues}
					formOne={formSOne}
					onChange={onChange}
				/>
			);
		}
	};

	// useEffect(() => {
	// 	console.log('iam:', errors);
	// }, [handleSubmit, values, errors]);

	const sym = '</>';

	return (
		<div className='bg-gray-100 w-full'>
			<div className='max-w-[1440px] m-auto min-h-screen flex px-10'>
				<div className='hidden lg:flex py-[30px] h-screen w-[750px] flex-col justify-center'>
					<Link
						to='/'
						className="font-['Tapestry'] font-900 text-[40px] tracking-widest cursor-pointer">
						{sym} ZIJELA
					</Link>
					<div className='flex items-center h-[80vh] justify-start w-full '>
						<img src={image} alt='' className='h-[400px] w-[90%]' />
					</div>
				</div>
				<div
					className={`${
						active ? 'hidden' : 'flex'
					} flex-col md:flex-row bg-gray-100 w-full `}>
					<Link
						to='/'
						className="md:hidden font-['Tapestry'] font-900 text-[40px] tracking-widest cursor-pointer">
						{sym} ZIJELA
					</Link>
					<div className='h-[600px] m-auto'>
						<div>
							{/* <Link
								to='/'
								className="md:hidden font-['Tapestry'] font-900 text-[40px] tracking-widest cursor-pointer">
								{sym} ZIJELA
							</Link> */}
							<div>
								<h2 className="font-['Poppins'] font-[700] text-[30px] mt-[34px] md:text-[30px] lg:mt-0 lg:text-[48px] text-gray-900 tracking-tight">
									Start your Application
								</h2>
								<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 ">
									Please fill the form below to apply for a programme. It will
									take less than 3 minutes
								</p>
							</div>
						</div>
						{/* onSubmit={handleSubmit} */}
						<div className='mt-[50px]'>
							<form className='form'>
								<div className='flex flex-col w-full'>
									<label className="font-['Poppins'] font-[500] text-[25px] text-gray-800  ">
										Email
									</label>
									<input
										className='py-6 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
										type='email'
										name='email'
										placeholder='Enter your email address'
										value={detailRes.email}
										onChange={handleChangeDetails}
									/>
									{formOneError?.email && (
										<p className='text-red-800 text-[15px]'>
											{formOneError.email}
										</p>
									)}
								</div>
								<div className='flex flex-col w-full mt-10'>
									<label className="font-['Poppins'] font-[500] text-[25px] text-gray-800  ">
										Track
									</label>
									<select
										className='py-6 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
										type='track'
										name='track'
										placeholder='Enter your track'
										value={detailRes.track}
										onChange={handleChangeDetails}>
										<option value=''>Please choose one</option>
										<option value='web development'>Web Development</option>
										<option value='ui/ux'>UI/UX Design</option>
									</select>
									{formOneError?.track && (
										<p className='text-red-800 text-[15px]'>
											{formOneError.track}
										</p>
									)}
								</div>
								<div className='flex justify-end w-full'>
									<button
										className=' bg-[#22C55E] text-[18px] outline-none rounded-md text-white py-[10px] px-[34px] mt-[60px]'
										onClick={handleSwitch}>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/* ✔ */}
				<div className={`${active ? 'flex' : 'hidden'} bg-gray-100 w-full`}>
					<div className='hidden sm:block mr-[60px] mt-[200px] mb-[50px] lg:mb-0 lg:mt-[100px] ml-[50px]'>
						<div className='flex items-start '>
							<div className='flex flex-col justify-start space-y-5'>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 0 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 0 ? 'text-black' : 'text-white'} `}>
										{page > 0 ? '✔' : '1'}
									</p>
								</div>
								<img src={line} alt='' className='h-2 sm:h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start my-5'>
							<div className='flex flex-col justify-start space-y-5'>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 1 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 1 ? 'text-black' : 'text-white'} `}>
										{page > 1 ? '✔' : '2'}
									</p>
								</div>
								<img src={line} alt='' className='h-2 sm:h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start my-5'>
							<div className='flex flex-col justify-start space-y-5'>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 2 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 1 ? 'text-black' : 'text-white'} `}>
										{page > 2 ? '✔' : '3'}
									</p>
								</div>
								<img src={line} alt='' className='h-2 sm:h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start mt-5'>
							<div className='flex flex-col justify-start '>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 3 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 1 ? 'text-black' : 'text-white'} `}>
										{page > 3 ? '✔' : '4'}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div></div>
					<div className='flex-1 mt-10 lg:mt-[120px]'>
						<Link
							to='/'
							className="lg:hidden font-['Tapestry'] font-900 text-[40px] tracking-widest cursor-pointer flex justify-end">
							{sym} ZIJELA
						</Link>
						<div className='flex justify-between items-start sm:hidden'>
							{/* THE START */}
							<div className='flex items-start my-[60px]'>
								<div className='flex flex-col justify-start '>
									<div
										className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
											page === 0 ? 'bg-green-400' : 'bg-white'
										} text-white`}>
										<p
											className={`${
												page === 0 ? 'text-black' : 'text-white'
											} `}>
											{page > 0 ? '✔' : '1'}
										</p>
									</div>
								</div>
							</div>

							<div className='flex items-start my-[60px]'>
								<div className='flex flex-col justify-start '>
									<div
										className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
											page === 1 ? 'bg-green-400' : 'bg-white'
										} text-white`}>
										<p
											className={`${
												page === 0 ? 'text-black' : 'text-white'
											} `}>
											{page > 1 ? '✔' : '2'}
										</p>
									</div>
								</div>
							</div>

							<div className='flex items-start my-[60px]'>
								<div className='flex flex-col justify-start '>
									<div
										className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
											page === 2 ? 'bg-green-400' : 'bg-white'
										} text-white`}>
										<p
											className={`${
												page === 0 ? 'text-black' : 'text-white'
											} `}>
											{page > 2 ? '✔' : '3'}
										</p>
									</div>
								</div>
							</div>

							<div className='flex items-start my-[60px]'>
								<div className='flex flex-col justify-start '>
									<div
										className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
											page === 3 ? 'bg-green-400' : 'bg-white'
										} text-white`}>
										<p
											className={`${
												page === 0 ? 'text-black' : 'text-white'
											} `}>
											{page > 3 ? '✔' : '4'}
										</p>
									</div>
								</div>
							</div>
							{/* THE END */}
						</div>
						<div className='sm:mt-[120px] lg:mt-0'>
							<h1 className="font-['Poppins'] font-[700] text-[40px] xl:text-[48px] text-gray-900 tracking-tight">
								{FormTitles[page]}
							</h1>
							<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 ">
								please provide some more information to finalise your
								application. This should take less than 3 minutes.
							</p>
						</div>
						<div className='body'>{PageDisplay()}</div>
						<p className='text-red-700 text-center'>{message}</p>
						<div className='flex justify-end items-center mt-[60px] mb-[40px]'>
							<button
								className='text-[18px] text-[#22C55E] font-800 mr-20 cursor-pointer'
								disabled={page === 0}
								onClick={() => {
									setPage((currPage) => currPage - 1);
								}}>
								Go back
							</button>
							<button
								className={`${
									loading ? 'bg-orange-300' : 'bg-[#22C55E]'
								} text-[18px] outline-none rounded-md text-white py-[10px] px-[34px] `}
								onClick={() => {
									if (page === FormTitles.length - 1) {
										// alert('FORM SUBMITTED');
										// console.log(formData);
										createUser();
									} else {
										setPage((currPage) => currPage + 1);
									}
								}}>
								{loading
									? 'Loading...'
									: page === FormTitles.length - 1
									? 'Submit'
									: 'Proceed'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Application;
