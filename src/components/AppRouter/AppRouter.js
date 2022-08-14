import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../UI/Layout/Layout";
import {routerPrivate, routerPublic} from "../router/routerPrivate";
import {AuthContext} from "../../context/context";


const AppRouter = () => {

	const {isAuth} = useContext(AuthContext);
	console.log(isAuth)

	const routsPrivate = routerPrivate.map((item, i) => {
		return (
			<Route key={i} path={item.path} element={item.element}/>
		)
	});

	const routsPublic = routerPublic.map((item, i) => {
		return (
			<Route key={i} path={item.path} element={item.element}/>
		)
	});
	return (
		isAuth ?
			<Routes>
				<Route path="/" element={<Layout/>}>
					{routsPrivate}
				</Route>
			</Routes>
			:
			<Routes>
				{routsPublic}
			</Routes>
	);
};
export default AppRouter;



