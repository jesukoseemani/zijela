import React from 'react';
import { Stepper } from 'react-form-stepper';
import Header from './Header';

function Application() {
	return (
		<div className='max-w-[1150px] m-auto'>
			<Stepper
				steps={[<Header />, { label: 'Step 2' }, { label: 'Step 3' }]}
				activeStep={2}
			/>
			<h1>Koseemani olowowsusi</h1>
		</div>
	);
}

export default Application;
