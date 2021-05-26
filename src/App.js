import React from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import './index.css'

function App() {
    return (
        <div className={'main-form'}>
            <PostForm />
            <Posts />
        </div>
    )
}

export default App
