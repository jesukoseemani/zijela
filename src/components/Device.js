import React, { useState } from 'react';
import FormSelect from './FormSelect';

function Device({ values, formOne, setValues, onChange }) {
	const DeviceOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'Andriod', value: 'Andriod' },
		{ title: 'iOS', value: 'iOS' },
		{ title: 'Others', value: 'Others' },
	];
	const LaptopOptions = [
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
					name='device'
					value={values.device}
					onChange={onChange}
					label='Please specify your mobile device OS'
					errorMessage='This field is required'
					option={DeviceOptions}
					required
				/>

				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='own_laptop'
					value={values.own_laptop}
					onChange={onChange}
					label='Do you have a laptop or access to one?'
					errorMessage='This field is required'
					option={LaptopOptions}
					required
				/>

				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='good_internet'
					value={values.good_internet}
					onChange={onChange}
					label='Do you have access to good internet?'
					errorMessage='This field is required'
					option={LaptopOptions}
					required
				/>
			</form>
		</div>
	);
}

export default Device;
