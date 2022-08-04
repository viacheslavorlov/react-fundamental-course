import React from 'react';
import PostItem from "../PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './PostList.css';

const PostList = ({posts, deletePost, title}) => {  //* деструктуризация пропсов - полезно
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Постов нет.</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}.</h1>
            <TransitionGroup>
                {posts.map(item => (<CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames={'post'}>
                        <PostItem
                            deletePost={deletePost}
                            number={item.id}
                            post={item}/>
                    </CSSTransition>)
                )}
            </TransitionGroup>
        </div>

    );
};

export default PostList;