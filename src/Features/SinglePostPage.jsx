import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from '../Features/Time'
import ReactionButtons from "./ReactionButtons";
import { viewPost } from './PostSlice';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
const SinglePostPage = () => {
    const {postId}=useParams()//useparams get the id from the url of particular post
    const post=useSelector((state)=>viewPost(state,Number(postId)))

    if(!post){
        return(
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }
  return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${postId}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

export default SinglePostPage
