import React from 'react';
import '../assets/css/Posts.css';

function PostComment({ comments }){
  return(
    <div className="post-comments">
     {comments.map(comment => (
       <div key={comment.id} className="comment">
       <img src={comment.author.avatar} className="avatar" alt="author"/>
       <p>
         <span>{comment.author.name}</span>
         {comment.content}
       </p>
      </div>
     ))}
    </div>
    
  )
}


function Posts({ data }){
  const post = data;
  return(
    <div className="post">
      <div className="post_header">

      <img src={post.author.avatar} className="avatar" alt="author"/>
      <div className="post_details">
        <span>{post.author.name}</span>
        <span>{post.date}</span>
      </div>
      </div>
      <div className="content_post">
        <p>{post.content}</p>
      </div>
      <div className="divider">

      </div>
      <PostComment comments={post.comments}  />
    </div>
  );
}


export default Posts;