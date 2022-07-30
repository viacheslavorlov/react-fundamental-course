import './styles/App.css';
import React, {useEffect, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFIlter from "./components/PostFilter/PostFIlter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import getPageCount from "./utils/pages";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({query: '', sort: ''});
    const [visible, setVisible] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearched = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const post = await PostService.getAll();
        setPosts(post.data);
        const totalCount = post.headers['x-total-count'];
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
    }, []);


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

            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
