import React, { useState } from 'react';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';

function MoreAbout({ values, formOne, setValues, onChange }) {
	const EmployedOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'Yes', value: 'yes' },
		{ title: 'No', value: 'no' },
	];

	return (
		<div>
			<form className='form'>
				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='employed'
					value={values.employed}
					onChange={onChange}
					label='Are you currently employed?'
					errorMessage='This field is required'
					option={EmployedOptions}
					required
				/>

				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='studying_prof'
					value={values.studying_prof}
					onChange={onChange}
					label='Are you studying for any professional exam(s)?'
					errorMessage='This field is required'
					option={EmployedOptions}
					required
				/>

				<FormTextArea
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='comment'
					value={values.comment}
					onChange={onChange}
					label='In less than 250 characters, explain why you want to be a part of
						this program'
					errorMessage="comment should be 3-16 characters and shouldn't include any special character!"
					required
					pattern={'^[A-Za-z0-9]{3,16}$'}
				/>
			</form>
		</div>
	);
}

export default MoreAbout;
