import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './PostSlice'
import { selectAllUsers } from '../users/UserSlice'
//import { nanoid } from '@reduxjs/toolkit'
const PostForm = () => {
    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [users,setUsers]=useState("")
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const user=useSelector(selectAllUsers)
    const onTitleChanged=(e)=>setTitle(e.target.value)
    const onContentChanged=(e)=>setContent(e.target.value)
    const onAuthorChanged=(e)=>setUsers(e.target.value)

    const canSave = [title, content, users].every(Boolean) && addRequestStatus === 'idle';

    const onSave=()=>{
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, users })).unwrap()

                setTitle('')
                setContent('')
                setUsers('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    

    const usersOptions = user.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={users} onChange={onAuthorChanged}>
                    <option value=""></option> 
                    {usersOptions}
                </select> 
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSave}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
  )
}

export default PostForm
