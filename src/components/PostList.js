import React from 'react';
import PostItem from "./PostItem";

const PostList = ({list, title}) => {  //* деструктуризация пропсов - полезно
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}.</h1>
			{list.map((item, index) => {
				return <PostItem number={index + 1} post={item} key={item.id}/>  //* рендеринг элемента
			})}
		</div>
	);
};

export default PostList;