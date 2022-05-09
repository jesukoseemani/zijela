import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Application from './components/Application';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Ux from './pages/Ux';
import Wb from './pages/Wb';

function App() {
	return (
		<div className='w-full m-auto scrollbar-hide'>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/ui_ux' element={<Ux />} />
					<Route path='/web_development' element={<Wb />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/register' element={<Application />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
