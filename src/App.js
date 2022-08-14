import './styles/App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context/context";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
	}, []);
	
	
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<Router>
				<div>
					<AppRouter/>
				</div>
			</Router>
		</AuthContext.Provider>
	)
}

export default App;
