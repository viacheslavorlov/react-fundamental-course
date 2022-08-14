import React, {useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {routerPrivate} from "../../router/routerPrivate";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Layout = ({auth}) => {

	const {setIsAuth} = useContext(AuthContext);
	const loggout = ()=> {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

	const linksPrivate = routerPrivate
		.filter(link => link.name !== null)
		.map((item, i) => {
		return (
			<li key={i}>
				<NavLink to={item.path}>{item.name}</NavLink>
			</li>
		);
	});

	const linksPublic = routerPrivate
		.filter(link => link.name !== null)
		.map((item, i) => {
			return (
				<li key={i}>
					<NavLink to={item.path}>{item.name}</NavLink>
				</li>
			);
		});

	return (
		<>
			<header>
				<ul className="navbar">
					{auth ? linksPrivate : linksPublic}
					<MyButton children={'Выйти'}
					          onClick={loggout}/>
				</ul>
			</header>
			<hr/>
			<main>
				<Outlet/>
			</main>


			<footer></footer>

		</>


	);
};

export default Layout;
