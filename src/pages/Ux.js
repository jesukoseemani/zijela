import React from 'react';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import HeroUxRemake from '../components/HeroUxRemake';
import ModalReuse from '../components/ModalReuse';
import Payment from '../components/Payment';
import WhatToLearnUx from '../components/WhatToLearnUx';

function Ux({ openModal, modalIsOpen, closeModal, link, title }) {
	return (
		<div className='w-full m-auto'>
			<Header />
			<HeroUxRemake openModal={openModal} />
			<GetStarted
				title='UI/UX Design'
				desc='In this course, you would be able to create usable solutions that delight the user, understand the user behaviour and design solutions that achieves both user and business goals. Learn how to design attractive mobile and web app interfaces for yourself, companies and startup businesses.'
			/>
			<WhatToLearnUx openModal={openModal} />
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

export default Ux;
