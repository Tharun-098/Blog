import { useSelector,useDispatch} from "react-redux";
//import { useEffect } from "react";
import React from 'react'
import { selectAllPosts,getPostsError,getPostsStatus,fetchPosts } from "./PostSlice";
import PostExcept from "./PostExcept";

const PostList = () => {
//    const dispatch=useDispatch()
    const posts=useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    // useEffect(() => {
    //     if (postStatus === 'idle') {
    //         dispatch(fetchPosts())
    //     }
    // }, [postStatus, dispatch])
    

   

    //The slice() method in JavaScript is a built-in function that can be used on arrays and strings to create a shallow copy of a portion of the array or string. The method does not modify the original array or string.
    //The localeCompare() method in JavaScript is used to compare two strings in a specific locale (language/country) and returns a value indicating whether one string is lexicographically less than, equal to, or greater than another string.
    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        console.log(orderedPosts)
        content = orderedPosts.map(post => <PostExcept key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostList
