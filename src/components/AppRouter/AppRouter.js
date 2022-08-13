import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import Layout from "../UI/Layout/Layout";


const AppRouter = () => {

	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<Home/>}/>
				<Route path="posts" element={<Posts/>}/>
				<Route path="posts/:id" element={<PostIdPage/>}/>
				<Route path="*" element={<Error/>}/>
				<Route path="about" element={<About/>}/>
			</Route>
		</Routes>
	);
};
//! <Route path=":id" element={<PostIdPage/>}/>
export default AppRouter;
