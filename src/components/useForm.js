import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		track: '',
		gender: '',
		age_range: '',
		country: '',
		state: '',
		category: '',
		course_study: '',
		program_experience: '',
		device: '',
		own_laptop: '',
		good_internet: '',
		employed: '',
		studying_prof: '',
		comment: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// setErrors(validate(values));
		setIsSubmitting(true);
	};

  

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return {
		isSubmitting,
		handleChange,
		handleSubmit,
		setValues,
		setErrors,
		values,
		errors,
	};
};

export default useForm;
