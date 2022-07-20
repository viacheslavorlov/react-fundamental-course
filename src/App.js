import './styles/App.css';
import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'Javascript', body: 'Description'},
            {id: 2, title: 'Python', body: 'Some Description'},
            {id: 3, title: 'C++', body: 'Useful Description'}
        ]
    );

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now}]);

        setPost({title: '', body: ''})

        console.log(post, posts);
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    type="text"
                    placeholder={'название поста'}
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                <MyInput
                    type="text"
                    placeholder={'описание поста'}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList list={posts} title={'Список постов про разные языки'}/>
            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
