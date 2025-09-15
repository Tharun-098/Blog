import React from 'react'
import PostList from './Features/PostList'
import PostForm from './Features/PostForm'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePostPage from './Features/SinglePostPage'
import EditPostForm from './Features/EditPostForm'
const App = () => {
  return (
    <main className='App'>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList/>}/>
        <Route path='post'>
          <Route index element={<PostForm/>}/>
          <Route path=':postId' element={<SinglePostPage/>}/>
          <Route path='edit/:postId' element={<EditPostForm/>}/>
        </Route>
        </Route>
      </Routes>
    </main>
  )
}

export default App
