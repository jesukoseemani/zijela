import React, { useState } from 'react';

function ProfessionalExperience({
	handleChange,
	handleSubmit,
	validate,
	values,
	errors,
	setErrors,
}) {
	const [focused, setFocused] = useState({
		category: false,
		course_study: false,
		program_experience: false,
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
				<div className='flex flex-col w-full mt-[60px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Select the category that best describes yous
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='category'
						value={values.category}
						onChange={handleChange}
						onBlur={() => handleBlur('category')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='I am an undergraduate'>I am an undergraduate</option>
						<option
							value='	I graduated from UniversitY/Polytechnic/College less than a
							years ago'>
							I graduated from UniversitY/Polytechnic/College less than a years
							ago
						</option>
						<option
							value='	I graduated from UniversitY/Polytechnic/College less than two
							years ago'>
							I graduated from UniversitY/Polytechnic/College less than two
							years ago
						</option>
						<option
							value='	I graduated from UniversitY/Polytechnic/College less than three
							years ago'>
							I graduated from UniversitY/Polytechnic/College less than three
							years ago
						</option>
						<option value='None of the above'>None of the above</option>
					</select>

					<span
						className={`text-red-800 text-[15px] ${
							focused.category ? 'flex' : 'hidden'
						}`}>
						{errors?.category}
					</span>
				</div>
				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Select the course that best describes your background
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='course_study'
						value={values.course_study}
						onChange={handleChange}
						onBlur={() => handleBlur('course_study')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Arts'>Arts</option>
						<option value='Biological Sciences'>Biological Sciences</option>
						<option value='Law'>Law</option>
						<option value='Engineering'>Engineering</option>
						<option value='Social Sciences'>Social Sciences</option>
						<option value='Others'>Others</option>
					</select>

					<span
						className={`text-red-800 text-[15px] ${
							focused.course_study ? 'flex' : 'hidden'
						}`}>
						{errors?.course_study}
					</span>
				</div>

				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Do you have any programming experience?
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='program_experience'
						value={values.program_experience}
						onChange={handleChange}
						onBlur={() => handleBlur('program_experience')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>

					<span
						className={`text-red-800 text-[15px] ${
							focused.program_experience ? 'flex' : 'hidden'
						}`}>
						{errors?.program_experience}
					</span>
				</div>
			</form>
		</div>
	);
}

export default ProfessionalExperience;
