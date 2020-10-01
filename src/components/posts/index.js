import React from 'react';

const Posts = ({posts, isLoading}) => {
    if(isLoading) {
        return <h3>Loading...</h3>
    }
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
};

export default Posts;