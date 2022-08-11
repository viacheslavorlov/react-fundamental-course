import React from 'react';
import MyButton from "./UI/button/MyButton";
import {Link} from "react-router-dom"

const PostItem = ({post, deletePost, number}) => {

	return (
		<div className={'post'}>
			<div className={'post__content'}>
				<strong>{number}. {post.title}</strong>
				<div>{post.body}</div>
			</div>
			<div className="post__btns">
				<MyButton>
					<Link to={`${number}`}>
						Открыть
					</Link>
				</MyButton>
				<MyButton
					onClick={() => deletePost(post)}>
					Удалить
				</MyButton>
			</div>
		</div>
	);
};

export default PostItem;