import React from 'react'
import {connect} from 'react-redux'
import Post from "./Post"

const Posts = ({posts}) => {
    if (!posts.length) {
        return (
            <ul className={'post'}>
                <li>
                    <label>there is no posts here</label>
                </li>
            </ul>
        )
    }
    return (
        <ul>
            {
                posts.map(post =>
                    <li className={'post'}>
                        <Post key={post.id} post={post} />
                    </li>
                )
            }
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts)