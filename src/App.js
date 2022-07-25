import './styles/App.css';
import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";


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
    }, [selectedSort, posts]);

    const sortPosts = (sort) => {
      setSelectedSort(sort);
    }
    


    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: '15px'}}/>
            <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={'Поиск'}/>
            <MySelect defaultValue={'Сортировака'}
                      value={selectedSort}
                      onChange={sort => sortPosts(sort)}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По содержанию'}
                      ]}/>
            {posts.length === 0
                ? <h1 style={{textAlign: 'center'}}>Постов нет.</h1>
                : <PostList
                    deletePost={deletePost}
                    posts={sortedPosts}
                    title={'Список постов про разные языки'}/>}

            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
