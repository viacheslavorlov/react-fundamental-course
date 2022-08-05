import '../../styles/App.css';
import React, {useEffect, useState} from "react";
import Counter from "../Counter";
import ClassCounter from "../ClassCounter";

import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import PostFIlter from "../PostFilter/PostFIlter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService/PostService";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount} from "../../utils/pages";
import Pagination from "../Pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''});
    const [visible, setVisible] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearched = usePosts(posts, filter.sort, filter.query);



    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const post = await PostService.getAll(limit, page);
        setPosts(post.data);
        const totalCount = post.headers['x-total-count'];
        console.log(totalCount);
        setTotalPages(getPageCount(totalCount, limit));
    });

    const createPost = (newPost) => {
        if(newPost.body !== '' && newPost.title !== '') {
            setPosts([...posts, newPost]);
            setVisible(false);
        }
    }

    // async function fetchPosts() {
    //     setIsPostsLoading(true);
    //     setTimeout(async () => { //таймаут для наглядности
    //         const response = await PostService.getAll();
    //         setPosts(response.data);
    //         setIsPostsLoading(false);
    //     }, 1000);
    // }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    useEffect(() => {
        fetchPosts();
    }, [page]);

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App">

            <MyButton onClick={fetchPosts}>GetPosts</MyButton>
            <MyButton onClick={() => setVisible(true)}>
                Создать пост!
            </MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm createPost={createPost} setVisible={setVisible}/>
            </MyModal>

            <hr style={{margin: '15px'}}/>
            <PostFIlter filter={filter} setFilter={setFilter}/>

            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', margin: 50}}><Loader/></div>
                : postError ? <h1>произошла ошибка: {postError}</h1> : <PostList
                    deletePost={deletePost}
                    posts={sortedAndSearched}
                    title={'Список постов про разные языки'}/>}
            <Pagination page={page}
                        changePage={changePage}
                        totalPages={totalPages}/>

            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default Posts;
