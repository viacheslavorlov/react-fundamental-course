import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context/context";

const Loggin = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const loggin = event => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}
	console.log(isAuth);
	return (
		<div>
			<h1>
				Войдите в свою учётную запись
			</h1>
			<form onSubmit={loggin}>
				<MyInput type="text" placeholder="введите логин"/>
				<MyInput type="password" placeholder="введите пароль"/>
				<MyButton>Войти</MyButton>

			</form>
		</div>
	);
};

export default Loggin;
