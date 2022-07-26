import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService/PostService";
import Loader from "../UI/Loader/Loader";
import Comments from "./Comments";
import Error from "./Error";

const PostIdPage = () => {
	const {id} = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchPComments, isCommentsLoading, commentsError] = useFetching(async () => {
		const response = await PostService.getComments(id);
		setComments(response.data);
	});

	console.log(comments);
	useEffect(() => {
		fetchPostById(id);
		fetchPComments(id);
	}, [id]);
	return (
		<div className="post">
			<div className="post__content">
				{isLoading ?
					<Loader/> : error ? <Error/> :
						<div>
							<h2>#{post.id} {post.title}</h2>
							<div>{post.body}</div>
						</div>
				}
			</div>
			<br/>
			<hr/>
			<h2>Комментарии:</h2>
			<div>
				{isCommentsLoading ?
					<Loader/> : commentsError ? <Error/> :
						<div>
							{comments.map((item, i) => {
									return (
										<Comments item={item} key={i}/>
									)
								}
							)}
						</div>
				}
			</div>
		</div>
	);
};

export default PostIdPage;