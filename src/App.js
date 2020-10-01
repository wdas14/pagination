import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/posts';
import Pagination from './components/pagination';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const getPosts = async () => {
			setIsLoading(true);
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setPosts(res.data);
			setIsLoading(false);
		}
		getPosts();
	}, []);

	const postsPerPage = 10;
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handleClick = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	const handlePrevNext = (currentPage, buttonType) => {
		let newPageNumber = currentPage;

		if(buttonType === 'prev' && currentPage > 1) {
			newPageNumber = currentPage - 1;
		}else if(buttonType === 'next' && currentPage < 10){
			newPageNumber = currentPage + 1
		}
		
		setCurrentPage(newPageNumber);
	}

	return (
		<div className="App">
			<h1>Pagination</h1>
			<Posts posts={currentPosts} isLoading={isLoading} />
			<Pagination postsPerPage={postsPerPage} totalPosts={posts.length + 1} handleClick={handleClick} handlePrevNext={handlePrevNext} currentPage={currentPage}/>
		</div>
	);
}

export default App;
