import React, { useState, useEffect } from 'react';

function PersonalDetails({
	handleChange,
	handleSubmit,
	validate,
	values,
	errors,
	setErrors,
}) {
	const [focused, setFocused] = useState({
		firstName: false,
		lastName: false,
		phone: false,
		gender: false,
		age_range: false,
		country: false,
		state: false,
	});

	const handleBlur = (value) => {
		setFocused((prev) => {
			return { ...prev, [value]: true };
		});
		setErrors(validate(values));
	};

	return (
		<div>
			<form className='form'>
				<div className='flex items-center space-x-5'>
					<div className='flex-1 flex flex-col w-full mt-[60px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							First Name
						</label>
						<input
							className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='firstName'
							placeholder='Enter your first name'
							value={values.firstName}
							onChange={handleChange}
							onBlur={() => handleBlur('firstName')}
						/>

						<span
							className={`text-red-800 text-[15px] ${
								focused.firstName ? 'flex' : 'hidden'
							}`}>
							{errors?.firstName}
						</span>
					</div>

					<div className='flex-1 flex flex-col w-full mt-[60px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							Last Name
						</label>
						<input
							className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='lastName'
							placeholder='Enter your last name'
							value={values.lastName}
							onChange={handleChange}
							onBlur={() => handleBlur('lastName')}
						/>

						<span
							className={`text-red-800 text-[15px] ${
								focused.lastName ? 'flex' : 'hidden'
							}`}>
							{errors?.lastName}
						</span>
					</div>
				</div>

				<div className='flex flex-col w-full mt-[10px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Email Address
					</label>
					<input
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='email'
						// placeholder='Enter your last name'
						value={values.email}
						onChange={handleChange}
						disabled
					/>
				</div>

				<div className='flex flex-col w-full mt-[10px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Phone Number
					</label>
					<input
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='number'
						name='phone'
						placeholder='2348102****'
						value={values.phone}
						onChange={handleChange}
						onBlur={() => handleBlur('phone')}
					/>

					<span
						className={`text-red-800 text-[15px] ${
							focused.phone ? 'flex' : 'hidden'
						}`}>
						{errors?.phone}
					</span>
				</div>
				<div className='flex items-center space-x-5'>
					<div className='flex flex-col w-full mt-[10px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							Gender
						</label>
						<select
							className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='gender'
							value={values.gender}
							onChange={handleChange}
							onBlur={() => handleBlur('gender')}>
							{/* <option value='' selected>
								Please choose one
							</option> */}
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</select>

						<span
							className={`text-red-800 text-[15px] ${
								focused.gender ? 'flex' : 'hidden'
							}`}>
							{errors?.gender}
						</span>
					</div>
					<div className='flex flex-col w-full mt-[10px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							Age Range
						</label>
						<select
							className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='age_range'
							value={values.age_range}
							onChange={handleChange}
							onBlur={() => handleBlur('age_range')}>
							{/* <option value='' selected>
								Please choose one
							</option> */}
							<option value='below 18'>below 18</option>
							<option value='18 - 20'>18 - 20</option>
							<option value='21 - 25'>21 - 25</option>
							<option value='25 - 30'>25 - 30</option>
							<option value='above 30'>above 30</option>
						</select>

						<span
							className={`text-red-800 text-[15px] ${
								focused.age_range ? 'flex' : 'hidden'
							}`}>
							{errors?.age_range}
						</span>
					</div>
				</div>

				<div className='flex items-center space-x-5'>
					<div className='flex flex-col w-full mt-[10px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							Country
						</label>
						<input
							className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='country'
							placeholder='Enter your Country'
							value={values.country}
							onChange={handleChange}
							onBlur={() => handleBlur('country')}
						/>

						<span
							className={`text-red-800 text-[15px] ${
								focused.country ? 'flex' : 'hidden'
							}`}>
							{errors?.country}
						</span>
					</div>
					<div className='flex flex-col w-full mt-[10px]'>
						<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
							State
						</label>
						<input
							className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='text'
							name='state'
							placeholder='Enter your State'
							value={values.state}
							onChange={handleChange}
							onBlur={() => handleBlur('state')}
						/>

						<span
							className={`text-red-800 text-[15px] ${
								focused.state ? 'flex' : 'hidden'
							}`}>
							{errors?.state}
						</span>
					</div>
				</div>
			</form>
		</div>
	);
}

export default PersonalDetails;
