import './App.css';
import Post from "./components/Post";
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  
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
    <div className="App">
      <Post posts={posts} />
    </div>
  );
}

export default App;
 