import './styles/App.css';
import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFIlter from "./components/PostFilter/PostFIlter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Javascript', body: 'Description'},
            {id: 2, title: 'Python', body: 'Some Description'},
            {id: 3, title: 'C++', body: 'Useful Description'}
        ]
    );

    const [filter, setFilter] = useState({query: '', sort: ''});
    const [visible, setVisible] = useState(false);

    const createPost = (newPost) => {
        if(newPost.body !== '' && newPost.title !== '') {
            setPosts([...posts, newPost]);
            setVisible(false);
        }
    }

    const deletePost = (post) => {
        setPosts(sortedPosts.filter(p => p.id !== post.id));
    }

    const sortedPosts = useMemo(() => {
        console.log('функция отработала')
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    const sortedAndSearched = useMemo(() => {
        return sortedPosts.filter(item => {
            return item.title.toLowerCase().includes(filter.query.toLowerCase());
        });
    }, [filter.query, sortedPosts])



    return (
        <div className="App">
            <MyButton onClick={() => setVisible(true)}>
                Создать пост!
            </MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm createPost={createPost} setVisible={setVisible}/>
            </MyModal>

            <hr style={{margin: '15px'}}/>
            <PostFIlter filter={filter} setFilter={setFilter}/>
            <PostList
                deletePost={deletePost}
                posts={sortedAndSearched}
                title={'Список постов про разные языки'}/>
            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
