import './styles/App.css';
import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFIlter from "./components/PostFilter/PostFIlter";


function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Javascript', body: 'Description'},
            {id: 2, title: 'Python', body: 'Some Description'},
            {id: 3, title: 'C++', body: 'Useful Description'}
        ]
    );
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        setPosts(sortedPosts.filter(p => p.id !== post.id));
    }

    const sortedPosts = useMemo(() => {
        console.log('функция отработала')
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [posts,selectedSort]);
    const sortedAndSearched = useMemo(() => {
        return sortedPosts.filter(item => {
            return item.title.includes(searchQuery);
        })
    }, [searchQuery, sortedPosts])

    const sortPosts = (sort) => {
      setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: '15px'}}/>
            <PostFIlter searchQuery={searchQuery} setSearchQuery={setSearchQuery} sortPosts={sortPosts} selectedSort={selectedSort}/>
            {sortedAndSearched.length === 0
                ? <h1 style={{textAlign: 'center'}}>Постов нет.</h1>
                : <PostList
                    deletePost={deletePost}
                    posts={sortedAndSearched}
                    title={'Список постов про разные языки'}/>}

            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
