import React from 'react'
import { useState } from 'react'
import {connect} from 'react-redux'
import {createPost} from '../redux/actions'

const PostForm = (props) => {

    const [post, setPost] = useState('')

    const submitForm = (event) => {
        event.preventDefault()
        if (!post.trim()){
            alert('empty input doesn\'t require!')
        } else {
            props.createPost({
                    title: post,
                    id: Date.now()
                }
            )
        }
        setPost('')
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className={'input-field'}>
                    <input
                        type={'text'}
                        id={'title'}
                        value={post}
                        onChange={event => setPost(event.target.value)}
                    />
                    <label htmlFor={'title'} className={'active'}>
                        Enter post title
                    </label>
                </div>

                <button className="waves-effect waves-light btn-small">
                   create post
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(null, mapDispatchToProps)(PostForm)