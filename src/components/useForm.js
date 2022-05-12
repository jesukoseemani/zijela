import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phone: '',
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
	const [focused, setFocused] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleFocus = (e) => {
		setFocused(true);
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
