export function validate(values) {
	let errors = {};

	if (!values.firstName.trim()) {
		errors.firstName = 'Firstname required';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.gender.trim()) {
		errors.gender = 'Gender required';
	}

	if (!values.state.trim()) {
		errors.state = 'State required';
	}
	if (!values.age_range.trim()) {
		errors.age_range = 'Age range required';
	}
	if (!values.category.trim()) {
		errors.category = 'Category required';
	}
	if (!values.course_study.trim()) {
		errors.course_study = 'course required';
	}
	if (!values.country.trim()) {
		errors.country = 'Country required';
	}
	if (!values.lastName.trim()) {
		errors.lastName = 'Lastname required';
	}
	if (!values.phone.trim()) {
		errors.phone = 'Phone required';
	}
	if (!values.track.trim()) {
		errors.track = 'Track required';
	}
	if (!values.program_experience.trim()) {
		errors.program_experience = 'Program_experience required';
	}

	if (!values.device.trim()) {
		errors.device = 'This Field is required';
	}
	if (!values.own_laptop.trim()) {
		errors.own_laptop = 'This Field is required';
	}
	if (!values.good_internet.trim()) {
		errors.good_internet = 'This Field is required';
	}
	if (!values.employed.trim()) {
		errors.employed = 'This Field is required';
	}
	if (!values.studying_prof.trim()) {
		errors.studying_prof = 'This Field is required';
	}
	if (!values.comment.trim()) {
		errors.comment = 'This Field is required';
	}

	return errors;
}

export function validateInfoFirst(values) {
	let errors = {};

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.track.trim()) {
		errors.track = 'Track required';
	}

	return errors;
}
