import './styles/App.css';
import React, {useState} from "react";
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


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: '15px'}}/>
            <MySelect defaultValue={'Сортировака'}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По содержанию'}
                      ]}/>
            {posts.length === 0
                ? <h1 style={{textAlign: 'center'}}>Постов нет.</h1>
                : <PostList
                    deletePost={deletePost}
                    list={posts}
                    title={'Список постов про разные языки'}/>}

            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
