import React from 'react';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import HeroUx from '../components/HeroUx';
import ModalReuse from '../components/ModalReuse';
import Payment from '../components/Payment';
import WhatToLearnWeb from '../components/WhatToLearnWeb';

function Wb({ openModal, modalIsOpen, closeModal, link, title }) {
	return (
		<div className='w-full m-auto'>
			<Header />
			<HeroUx title='Web Development' openModal={openModal} />
			<GetStarted
				title='Web Development'
				desc='In this course, you would be taught the fundamentals of the web using HTML and CSS, and advance progressively to complex JavaScript frameworks, such as React and also learning how to collaborate with other developers using Git.'
			/>
			<WhatToLearnWeb openModal={openModal} />
			<Payment />
			<Footer />

			<ModalReuse
				modalIsOpen={modalIsOpen}
				openModal={openModal}
				closeModal={closeModal}
				link={link}
				title={title}
			/>
		</div>
	);
}

export default Wb;
