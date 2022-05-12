import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className='flex-1 flex flex-col w-full mt-[10px]'>
			<label className="font-['Poppins'] font-[500] text-[20px] text-gray-800 ">
				{label}
			</label>
			<input
				className='input'
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() => inputProps.name === 'comment' && setFocused(true)}
				focused={focused.toString()}
			/>

			<span className='text-red-800 text-[15px] hidden'>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
