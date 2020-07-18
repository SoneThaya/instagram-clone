import React from 'react'
import "./Post.css"
import Avatar from '@material-ui/core/Avatar';

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      
      <img
        className="post__image"      
        src="https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt="door" />
      
      <h4 className="post__text"><strong>Username:</strong> caption</h4>
    </div>
  )
}

export default Post
