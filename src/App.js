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

    const [title, setTitle] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    type="text"
                    placeholder={'название поста'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput type="text" placeholder={'описание поста'}/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList list={posts} title={'Список постов про разные языки'}/>
            <Counter/>
            <ClassCounter/>
        </div>
    )
}

export default App;
