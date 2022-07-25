import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, deletePost, title}) => {  //* деструктуризация пропсов - полезно
	console.log(posts, title, deletePost);
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}.</h1>
			{posts.map((item, index) => {
				return <PostItem deletePost={deletePost} number={index + 1} post={item} key={item.id}/>  //*
				// рендеринг элемента
			})}
		</div>
	);
};

export default PostList;