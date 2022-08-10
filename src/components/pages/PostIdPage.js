import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService/PostService";

const PostIdPage = () => {
    let {param}  = useParams();
    const [post, setPost] = useState({});

    console.log(param);
    const [fetchPostById, isLoading, error] =useFetching(async (id) => {
        const response = await PostService.getById(id);
    });

    useEffect(() => {
        fetchPostById(param.id);
    });
    
    return (
        <div>
            <h1>Вы открыли страницу поста #{param.id}!</h1>
            <div>{post.id}. {post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostIdPage;