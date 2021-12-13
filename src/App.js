import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RenderRoutes } from './components/Helper/routing';
import ROUTES from './components/utilities/routes';
import Navbar from './components/pages/landing/navbar/Navbar';
import Footer from "./components/pages/landing/footer/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
					<React.Suspense fallback="loading...">
						<RenderRoutes routes={ROUTES}/>
					</React.Suspense>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
