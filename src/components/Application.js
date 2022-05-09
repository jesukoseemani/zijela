import React, {useState} from 'react';
import line from '../assets/linedesign.svg';
import PersonalDetails from './PersonalDetails';

function Application() {

	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		title: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		track: '',
		program_experience: '',
		do_you_have_diploma: '',
		h_l_c: '',
		employment_status: '',
		q_1: '',
		q_2: '',
		q_3: '',
	});

	const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

	const PageDisplay = () => {
		if (page === 0) {
			return <PersonalDetails formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return <PersonalDetails formData={formData} setFormData={setFormData} />;
		} else {
			return <PersonalDetails formData={formData} setFormData={setFormData} />;
		}
	};
	return (
		<div className='max-w-[1150px] m-auto'>
			<div className='flex items-center justify-start'>
				<div className='flex items-start justify-center space-x-10 mt-[60px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<div className='w-[30px] h-[30px] rounded-[50%] bg-green-400 text-white'>
							✔
						</div>
						<img src={line} alt='' className='h-[200px] w-full' />
					</div>
				</div>

				<div className='flex items-start justify-center space-x-10 mt-[20px]'>
					<div className='flex flex-col justify-start space-y-2'>
						<div className='w-[30px] h-[30px] rounded-[50%] bg-green-400 text-white'>
							✔
						</div>
					</div>
				</div>
			</div>
			<div className='form-container'>
				<div className='header'>
					<h1>{FormTitles[page]}</h1>
				</div>
				<div className='body'>{PageDisplay()}</div>
				<div className='footer'>
					<button
						disabled={page === 0}
						onClick={() => {
							setPage((currPage) => currPage - 1);
						}}>
						Prev
					</button>
					<button
						onClick={() => {
							if (page === FormTitles.length - 1) {
								alert('FORM SUBMITTED');
								console.log(formData);
							} else {
								setPage((currPage) => currPage + 1);
							}
						}}>
						{page === FormTitles.length - 1 ? 'Submit' : 'Next'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Application;
