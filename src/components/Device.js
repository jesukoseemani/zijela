import React, { useState } from 'react';

function Device({
	handleChange,
	handleSubmit,
	values,
	errors,
	setErrors,
	validate,
}) {
	const [focused, setFocused] = useState({
		device: false,
		own_laptop: false,
		good_internet: false,
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
						Please specify your mobile device OS
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='device'
						value={values.device}
						onChange={handleChange}
						onBlur={() => handleBlur('device')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Andriod'>Andriod</option>
						<option value='i0s'>i0s</option>
						<option value='Others'>Others</option>
					</select>

					<span
						className={`text-red-800 text-[15px] ${
							focused.device ? 'flex' : 'hidden'
						}`}>
						{errors?.device}
					</span>
				</div>

				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Do you have a laptop or access to one?
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='own_laptop'
						value={values.own_laptop}
						onChange={handleChange}
						onBlur={() => handleBlur('own_laptop')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>

					<span
						className={`text-red-800 text-[15px] ${
							focused.own_laptop ? 'flex' : 'hidden'
						}`}>
						{errors?.own_laptop}
					</span>
				</div>

				<div className='flex flex-col w-full mt-[30px]'>
					<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800  ">
						Do you have access to good internet?
					</label>
					<select
						className='py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
						type='text'
						name='good_internet'
						value={values.good_internet}
						onChange={handleChange}
						onBlur={() => handleBlur('good_internet')}>
						{/* <option value=''>Please choose one</option> */}
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
					<span
						className={`text-red-800 text-[15px] ${
							focused.good_internet ? 'flex' : 'hidden'
						}`}>
						{errors?.good_internet}
					</span>
				</div>
			</form>
		</div>
	);
}

export default Device;
