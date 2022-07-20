import React from 'react';
import {useState} from "react";

const Counter = () => {
	const [likes, setLikes] = useState(0); //* состояние 1
	const [value, setValue] = useState(''); //* состояние 2

	function increment() {
		setLikes(likes + 1);
	}

	function decrement() {
		setLikes(likes - 1);
	}

	return (
		<div>
			<h1>Функциональный компонент</h1>
			<input
				placeholder={'введите текст'}
				type="text"
				value={value}
				onChange={event => setValue(event.target.value)}/> {/* двустороннее связывание - value элемента
		 передаётся в состояние через функцию setValue*/}
			<div>{value}</div>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<div>{likes}</div>

		</div>
	);
};

export default Counter;