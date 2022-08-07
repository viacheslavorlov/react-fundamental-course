import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";


const AppRouter = () => {

    return (
        <Routes>
            <Route path="posts" element={<Posts/>}>
                <Route path=":id" element={<PostIdPage/>}/>
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>

        </Routes>
    );
};

export default AppRouter;
