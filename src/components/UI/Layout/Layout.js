import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>
				<ul className="navbar">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="about">About</NavLink>
					</li>
					<li>
						<NavLink to="posts">Posts</NavLink>
					</li>
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
