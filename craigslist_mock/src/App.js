import './App.css';
import Post from "./components/Post";
import PostsList from './components/PostsList'
import PostRender from "./components/PostRender"
import HomePage from './components/Homepage'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [posts, setPosts] = useState([]);
  const [postToRender, setPostToRender] = useState({});
  function changePostToRender(p){
    let obj = posts.find(el=> el = p.id);
    console.log('i am parameter id', p.id)
    console.log(posts)
    console.log(obj)
    setPostToRender({...obj})
  }
  console.log(postToRender)
  
  const fetchRequest = () => {
    fetch ('http://localhost:9292/posts')
    .then(r => r.json())
    .then(data => {
      setPosts(data)
    })
  }
  useEffect(() => {
    fetchRequest();
  },[])
  return (
      
      <Routes> 
        
        <Route path="/postrender" element={<PostRender post={postToRender}/>}/>
        <Route path="/postslist" element={<PostsList posts={posts} changePostToRender={changePostToRender} />}/>
        <Route path="/post" element={<Post posts={posts} />}/>
        <Route exact path="/" element={<HomePage />}/>


      </Routes>



    
  );
}

export default App;
 