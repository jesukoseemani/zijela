import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Question from '../components/Question';
import ShowData from '../components/ShowData';
import Sponsor from '../components/Sponsor';
import Testimonial from '../components/Testimonial';
import TrackUIDescription from '../components/TrackUIDescription';
import TrackWebDescription from '../components/TrackWebDescription';

function Home() {
	return (
		<div className='w-full m-auto'>
			<Header />
			<Hero />
			<Sponsor />
			<TrackWebDescription />
			<TrackUIDescription />
			<ShowData />
			<Testimonial />
			<Question />
			<Footer />
		</div>
	);
}

export default Home;
