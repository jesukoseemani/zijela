import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Application from './components/Application';
import Submitted from './components/Submitted';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Ux from './pages/Ux';
import Wb from './pages/Wb';

function App() {
	  const [modalIsOpen, setIsOpen] = React.useState(false);
	 const uxLink =
			'https://docs.google.com/document/d/1985gUVO5MACo3c2WrSU0gC7McP_dsGpf/edit?usp=sharing&ouid=111632863135965195740&rtpof=true&sd=true';
	 const webLink =
			'https://docs.google.com/document/d/1MujUq7iTAVX6GkV1s4bWOL0WvibAZf-0UVr9uZ0GX5Q/edit';
	 const uxTitle ='UI/UX Design'
	 const webTitle = 'Web Development';

	 

		function openModal() {
			setIsOpen(true);
		}

		function closeModal() {
			setIsOpen(false);
		}
	return (
		<div className='w-full m-auto scrollbar-hide'>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route
						path='/ui_ux'
						element={
							<Ux
								modalIsOpen={modalIsOpen}
								openModal={openModal}
								closeModal={closeModal}
								link={uxLink}
								title={uxTitle}
							/>
						}
					/>
					<Route
						path='/web_development'
						element={
							<Wb
								modalIsOpen={modalIsOpen}
								openModal={openModal}
								closeModal={closeModal}
								link={webLink}
								title={webTitle}
							/>
						}
					/>
					<Route path='/contact' element={<Contact />} />
					<Route path='/register' element={<Application />} />
					<Route path='/success' element={<Submitted />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
