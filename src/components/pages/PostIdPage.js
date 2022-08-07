import React from 'react';
import {useParams} from "react-router-dom";

const PostIdPage = () => {
    let {id}  = useParams();
    console.log(id);
    return (
        <div>
            <h1>Вы открыли страницу поста!</h1>
        </div>
    );
};

export default PostIdPage;