import './styles/App.css';
import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList";

function App() {
	const [posts, setPosts] = useState(
		[
			{id: 1, title: 'Javascript', body: 'Description'},
			{id: 2, title: 'Python', body: 'Some Description'},
			{id: 3, title: 'C++', body: 'Useful Description'}
		]
	);

	const [posts2, setPosts2] = useState(
		[
			{id: 1, title: 'JS', body: 'Description'},
			{id: 2, title: 'TS', body: 'Some Description'},
			{id: 3, title: 'React', body: 'Useful Description'}
		]
	);

	return (
		<div className="App">
			<PostList list={posts} title={'Список постов про разные языки'}/>
			<PostList list={posts2} title={'Список постов про JS'}/>
			<Counter/>
			<ClassCounter/>
		</div>
	)
}

export default App;
