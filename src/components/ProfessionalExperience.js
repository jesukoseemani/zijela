import React, { useState } from 'react';
import FormSelect from './FormSelect';

function ProfessionalExperience({ values, formOne, setValues, onChange }) {
	const LaptopOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'Yes', value: 'yes' },
		{ title: 'No', value: 'no' },
	];

	const GraduateOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'I am an undergraduate', value: 'I am an undergraduate' },
		{
			title:
				'I graduated from UniversitY/Polytechnic/College less than two years ago',
			value:
				'I graduated from UniversitY/Polytechnic/College less than two years ago',
		},
		{
			title:
				'I graduated from UniversitY/Polytechnic/College less than three years ago',
			value:
				'I graduated from UniversitY/Polytechnic/College less than three years ago',
		},
		{
			title: 'None of the above',
			value: 'None of the above',
		},
	];

	const BackgroundOptions = [
		{ title: 'Please choose one', value: '' },

		{ title: 'Arts', value: 'Arts' },
		{ title: 'Biological Sciences', value: 'Biological Sciences' },
		{ title: 'Law', value: 'Law' },
		{ title: 'Engineering', value: 'Engineering' },
		{ title: 'Social Sciences', value: 'Social Sciences' },
		{ title: 'Others', value: 'Others' },
	];

	return (
		<div>
			<form className='form'>
				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='category'
					value={values.category}
					onChange={onChange}
					label='Select the category that best describes you'
					errorMessage='This field is required'
					option={GraduateOptions}
					required
				/>

				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='course_study'
					value={values.course_study}
					onChange={onChange}
					label='Select the course that best describes your background'
					errorMessage='This field is required'
					option={BackgroundOptions}
					required
				/>

				<FormSelect
					// className='input py-4 pl-8 border border-solid border-[#D5DAE1] rounded-md mt-[6px] text-[15px]'
					type='text'
					name='program_experience'
					value={values.program_experience}
					onChange={onChange}
					label='Do you have any programming experience?'
					errorMessage='This field is required'
					option={LaptopOptions}
					required
				/>
			</form>
		</div>
	);
}

export default ProfessionalExperience;
