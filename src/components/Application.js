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

function Application() {
	const [page, setPage] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [active, setActive] = useState(false);
	const [formOneError, setFormOneError] = useState();

	useEffect(() => {
		const formOne = JSON.parse(localStorage.getItem('formOne'));
		if (formOne && formOne.track !== '' && formOne.email !== '') {
			setActive(true);
		}
	}, []);

	function submitForm() {
		setIsSubmitted(true);
	}

	const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
		submitForm,
		validate
	);

	const handleSwitch = (e) => {
		e.preventDefault();
		// setErrors(validate(values));
		setFormOneError(
			validateInfoFirst({ track: values.track, email: values.email })
		);
		if (values.track !== '' && values.email !== '') {
			setActive(true);
			localStorage.setItem(
				'formOne',
				JSON.stringify({ track: values.track, email: values.email })
			);
		}
		// console.log('values:', { track: values.track, email: values.email });
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
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					values={values}
					errors={errors}
					setErrors={setErrors}
					validate={validate}
				
				/>
			);
		} else if (page === 1) {
			return (
				<ProfessionalExperience
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					values={values}
					errors={errors}
					setErrors={setErrors}
					validate={validate}
				/>
			);
		} else if (page === 2) {
			return (
				<Device
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					values={values}
					errors={errors}
					setErrors={setErrors}
					validate={validate}
				/>
			);
		} else {
			return (
				<MoreAbout
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					values={values}
					errors={errors}
					setErrors={setErrors}
					validate={validate}
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
			<div className='max-w-[1440px] m-auto h-screen flex'>
				<div className='py-[30px] h-screen w-[750px] flex flex-col justify-center'>
					<Link
						to='/'
						className="font-['Tapestry'] font-900 text-[40px] tracking-widest cursor-pointer">
						{sym} ZIJELA
					</Link>
					<div className='flex items-center h-[80vh] justify-start w-full '>
						<img src={image} alt='' className='h-[400px] w-[90%]' />
					</div>
				</div>
				<div className={`${active ? 'hidden' : 'flex'} bg-gray-100 w-full `}>
					<div className='h-[600px] m-auto'>
						<div>
							<div>
								<h2 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
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
										value={values.email}
										onChange={handleChange}
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
										value={values.track}
										onChange={handleChange}>
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
					<div className='mr-[60px] mt-[100px] ml-[50px]'>
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
								<img src={line} alt='' className='h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start my-5'>
							<div className='flex flex-col justify-start space-y-5'>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 1 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 0 ? 'text-black' : 'text-white'} `}>
										{page > 1 ? '✔' : '2'}
									</p>
								</div>
								<img src={line} alt='' className='h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start my-5'>
							<div className='flex flex-col justify-start space-y-5'>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 2 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 0 ? 'text-black' : 'text-white'} `}>
										{page > 2 ? '✔' : '3'}
									</p>
								</div>
								<img src={line} alt='' className='h-[200px] w-full' />
							</div>
						</div>

						<div className='flex items-start mt-5'>
							<div className='flex flex-col justify-start '>
								<div
									className={`flex items-center justify-center w-[30px] h-[30px] rounded-[50%] ${
										page === 3 ? 'bg-green-400' : 'bg-white'
									} text-white`}>
									<p className={`${page === 0 ? 'text-black' : 'text-white'} `}>
										{page > 3 ? '✔' : '4'}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div></div>
					<div className='flex-1 mt-[120px]'>
						<div className='header'>
							<h1 className="font-['Poppins'] font-[700] text-[48px] text-gray-900 tracking-tight">
								{FormTitles[page]}
							</h1>
							<p className="font-['Poppins'] font-[500] text-[15px] text-gray-500 ">
								please provide some more information to finalise your
								application. This should take less than 3 minutes.
							</p>
						</div>
						<div className='body'>{PageDisplay()}</div>
						<div className='flex justify-end items-center mt-[60px]'>
							<button
								className='text-[18px] text-[#22C55E] font-800 mr-20 cursor-pointer'
								disabled={page === 0}
								onClick={() => {
									setPage((currPage) => currPage - 1);
								}}>
								Go back
							</button>
							<button
								className=' bg-[#22C55E] text-[18px] outline-none rounded-md text-white py-[10px] px-[34px] '
								onClick={() => {
									if (page === FormTitles.length - 1) {
										alert('FORM SUBMITTED');
										// console.log(formData);
									} else {
										setPage((currPage) => currPage + 1);
									}
								}}>
								{page === FormTitles.length - 1 ? 'Submit' : 'Proceed'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Application;
