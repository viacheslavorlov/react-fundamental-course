import './styles/App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";

function App() {
	return (
		<Router>
			<div>
				<AppRouter/>
			</div>
		</Router>
	)
}

export default App;
