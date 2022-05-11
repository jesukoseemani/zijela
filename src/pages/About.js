import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sponsor from '../components/Sponsor';
import Faq from '../components/Faq';
import Team from '../components/Team';
import HeroAbout from '../components/HeroAbout';
import GetReady from '../components/GetReady';
import AboutDes from '../components/AboutDes';
// import Choose from '../components/Choose';
// import HowItWork from '../components/HowItWork';

function About() {
	return (
		<div className='w-full m-auto'>
			<Header />

			<HeroAbout />

			<AboutDes />

			<Sponsor />

			{/* <Choose /> */}
			<Team />
			{/* <HowItWork /> */}

			<Faq />

			<GetReady />

			<Footer />
		</div>
	);
}

export default About;
