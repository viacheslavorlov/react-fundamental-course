import './styles/App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
	return (
		<Router>
			<div>
				<Navbar/>
				<hr/>
				<AppRouter/>
			</div>
		</Router>
	)
}

export default App;
