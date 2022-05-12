import { useState } from 'react';
import './formInput.css';

const FormSelect = (props) => {
	const [focused, setFocused] = useState(false);
	const { value, option, label, errorMessage, onChange, id, ...inputProps } =
		props;

	const handleFocus = (e) => {
		setFocused(true);
	};
	// onFocus={() =>
	// 					inputProps.name === 'confirmPassword' && setFocused(true)
	// 				}
	return (
		<div className='flex flex-col w-full mt-[10px]'>
			<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800 ">
				{label}
			</label>
			<select
				className='input'
				{...inputProps}
				value={value}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() => inputProps.name === 'comment' && setFocused(true)}
				focused={focused.toString()}>
				{option.map((item, i) => (
					<option key={i} value={item.value}>
						{item.title}
					</option>
				))}
			</select>
			<span className='text-red-800 text-[15px] hidden'>{errorMessage}</span>
		</div>
	);
};

export default FormSelect;
