import React, { useState } from 'react';
import FormSelect from './FormSelect';
import FormInput from './FormInput';

function PersonalDetails({ values, formOne, setValues, onChange }) {
	// className="font-['Poppins'] font-[500] text-[20px] text-gray-800  "
	// className='flex-1 flex flex-col w-full mt-[10px] xl:mt-[60px]'

	const GenderOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'Male', value: 'male' },
		{ title: 'Female', value: 'female' },
	];
	const AgeOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'below 18', value: 'below 18' },
		{ title: '18 - 20', value: '18 - 20' },
		{ title: '21 - 25', value: '21 - 25' },
		{ title: '25 - 30', value: '25 - 30' },
		{ title: 'above 30', value: 'above 30' },
	];

	return (
		<div>
			<form className='form'>
				{formOne && (
					<>
						<div className='w-full flex flex-col xl:flex-row items-center '>
							<FormInput
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='firstName'
								placeholder='Enter your first name'
								value={values.firstName}
								onChange={onChange}
								label='FirstName'
								errorMessage="firstName should be 3-16 characters and shouldn't include any special character!"
								required
								pattern={'^[A-Za-z0-9]{3,16}$'}
							/>

							<FormInput
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='lastName'
								placeholder='Enter your last name'
								value={values.lastName}
								onChange={onChange}
								label='LastName'
								errorMessage="lastName should be 3-16 characters and shouldn't include any special character!"
								required
								pattern={'^[A-Za-z0-9]{3,16}$'}
							/>
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
								value={formOne?.email}
								disabled
							/>
						</div>

						<FormInput
							// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
							type='number'
							name='phone'
							placeholder='2348102****'
							value={values.phone}
							onChange={onChange}
							label='Phone Number'
							errorMessage='This field is required'
							required
						/>

						<div className='w-full flex flex-col xl:flex-row items-center '>
							<FormSelect
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='gender'
								value={values.gender}
								onChange={onChange}
								label='Gender'
								errorMessage='This field is required'
								option={GenderOptions}
								required
							/>

							<FormSelect
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='age_range'
								value={values.age_range}
								onChange={onChange}
								label='Age Range'
								errorMessage='This field is required'
								option={AgeOptions}
								required
							/>
						</div>

						<div className='w-full flex flex-col xl:flex-row items-center '>
							<FormInput
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='country'
								placeholder='Enter your country'
								value={values.country}
								onChange={onChange}
								label='Country'
								errorMessage="country should be 3-16 characters and shouldn't include any special character!"
								required
								pattern={'^[A-Za-z0-9]{3,16}$'}
							/>

							<FormInput
								// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
								type='text'
								name='state'
								placeholder='Enter your State'
								value={values.state}
								onChange={onChange}
								label='State'
								errorMessage="state should be 3-16 characters and shouldn't include any special character!"
								required
								pattern={'^[A-Za-z0-9]{3,16}$'}
							/>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

export default PersonalDetails;
