import React, { useState } from 'react';

function MoreAbout({
	handleChange,
	handleSubmit,
	values,
	errors,
	setErrors,
	validate,
}) {
	const [focused, setFocused] = useState({
		employed: false,
		studying_prof: false,
		comment: false,
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
						Are you currently employed?
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='employed'
						value={values.employed}
						onChange={handleChange}
						onBlur={() => handleBlur('employed')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
					<span
						className={`text-red-800 text-[15px] ${
							focused.employed ? 'flex' : 'hidden'
						}`}>
						{errors?.employed}
					</span>
				</div>

				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Are you studying for any professional exam(s)?
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='studying_prof'
						value={values.studying_prof}
						onChange={handleChange}
						onBlur={() => handleBlur('studying_prof')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
					<span
						className={`text-red-800 text-[15px] ${
							focused.studying_prof ? 'flex' : 'hidden'
						}`}>
						{errors?.studying_prof}
					</span>
				</div>

				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						In less than 250 characters, explain why you want to be a part of
						this program
					</label>
					<textarea
						name='comment'
						rows='10'
						maxlength='200'
						className='py-2 pl-2 border border-solid border-[#D5DAE1] rounded-md mt-[6px]'
						onBlur={() => handleBlur('comment')}
					/>

					<span
						className={`text-red-800 text-[15px] ${
							focused.comment ? 'flex' : 'hidden'
						}`}>
						{errors?.comment}
					</span>
				</div>
			</form>
		</div>
	);
}

export default MoreAbout;
