import React from 'react'
import './CommentForm.css'

const CommentForm = () => {
  return (
    <div className='comment-form-wrapper'>
        <input type="text" placeholder="What's happening?" />
        <button>Post</button>
    </div>
  )
}

export default CommentForm