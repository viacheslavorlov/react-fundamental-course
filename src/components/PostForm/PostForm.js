import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {useState} from "react";


const PostForm = ({createPost, setVisible}) => {

	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e,) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		createPost(newPost);
		setPost({title: '', body: ''});
	}

	return (
		<div>
			<form>
				{/*Управляемый компонент*/}
				<MyInput
					type="text"
					placeholder={'название поста'}
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
				/>

				<MyInput //неупроавляемый компонент
					type="text"
					placeholder={'описание поста'}
					value={post.body}
					onChange={e => setPost({...post, body: e.target.value})}
				/>
				<MyButton onClick={(e) => addNewPost(e)}>Создать пост</MyButton>
				<MyButton onClick={(e) => {
					e.preventDefault();
					setVisible(false);
				}
				}>Отмена</MyButton>
			</form>
		</div>


	);
};

export default PostForm
