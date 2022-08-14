import '../../styles/App.css';
import React, {useEffect, useRef, useState} from "react";
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
import classes from "./Posts.module.css";
import {useObserver} from "../../hooks/useObserver";
import MySelect from "../UI/select/MySelect";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({query: '', sort: ''});
	const [visible, setVisible] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(1);
	const sortedAndSearched = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();



	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const post = await PostService.getAll(limit, page);
		setPosts([...posts, ...post.data]);
		const totalCount = post.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	});

	const createPost = (newPost) => {
		if (newPost.body !== '' && newPost.title !== '') {
			setPosts([...posts, newPost]);
			setVisible(false);
		}
	}


	const deletePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}
	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		console.log('before', page)
		setPage(page + 1);
		console.log('after', page)
	}, []);

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);


	useEffect(() => {
		fetchPosts(limit, page);
	}, []);


	const changePage = (page) => {
		setPage(page);
	}

	return (
		<div className="App">
			<div className={classes.postForm}>
				<MyButton onClick={fetchPosts}>GetPosts</MyButton>
				<MyButton onClick={() => setVisible(true)}>
					Создать пост!
				</MyButton>
			</div>

			<MyModal visible={visible} setVisible={setVisible}>
				<PostForm createPost={createPost} setVisible={setVisible}/>
			</MyModal>

			<hr style={{margin: '15px'}}/>
			<PostFIlter filter={filter} setFilter={setFilter}/>
			<MySelect
				value={limit}

				defaultValue= "Количество элементов на странице"
				options={[
					{value: 5, name: '5'},
					{value: 10, name: '10'},
					{value: 25, name: '25'},
					{value: 100, name: 'Показать все'}
				]}
				onChange={value => {
					setLimit(parseInt(value));
					setPage(0);
					console.log('onselect', page)
				}}
			/>
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
			<div ref={lastElement} style={{height: 20, background: "grey"}}></div>
		</div>
	)
}

export default Posts;
