import React from 'react'

const Post = ({post}) => {
    return (
        <label>
            <p>Post id: {post.id}</p>
            <p>Post title: {post.title} </p>
        </label>
    )
}

export default Post