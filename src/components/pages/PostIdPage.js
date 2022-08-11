import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService/PostService";

const PostIdPage = () => {
	const {id} = useParams();
	const [post, setPost] = useState({});

	const [fetchPostById, isLoading, error] = useFetching(async () => {

		const response = await PostService.getById(id);
		setPost(response.data);
		console.log(response);
	});

	console.log(post)
	console.log('post: ', post);
	useEffect(() => {
		fetchPostById(id);
	}, [id]);
	return (
		<div className="post">
			<div className="post__content">
				<h2>#{post.id} {post.title}</h2>
				<div>{post.body}</div>
			</div>
		</div>
	);
};

export default PostIdPage;