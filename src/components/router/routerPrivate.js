import About from "../pages/About";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Loggin from "../pages/Loggin";


export const routerPrivate = [
	{path: '/', element: <Home/>, name: 'Home'},
	{path: 'about', element: <About/>, name: 'About'},
	{path: 'posts', element: <Posts/>, name: 'Posts'},
	{path: 'posts/:id', element: <PostIdPage/>, name: null},
	{path: '*', element: <Error/>, name: null}
];

export const routerPublic = [
	{path: 'loggin', element: <Loggin/>, name: 'Loggin'},
	{path: '*', element: <Loggin/>, name: null}
]