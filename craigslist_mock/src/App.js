import './App.css';
import Post from "./components/Post";
import { useState, useEffect } from 'react';

function App() {
  const [details, setDetails] = useState([]);
  const [posts, setPosts] = useState([]);
  const [phones, setPhones] = useState([]);
  const [contacts, setContacts] = useState([]);
  const fetchRequest = (tableName) => {
    fetch(`http://localhost:9292/${tableName}`)
    .then(r => r.json())
    .then(data => {
      if (tableName === 'details'){
        setDetails(data)
      }
      else if (tableName === 'phones'){
        setPhones(data)
      }
      else if (tableName === 'posts'){
        setPosts(data)
      }
      else if (tableName === 'contacts'){
        setContacts(data)
      }
      else{
        console.log("no table name found")
      }
    })
  }
  useEffect(() => {
    fetchRequest('details');
    fetchRequest('posts');
    fetchRequest('phones');
    fetchRequest('contacts')
  },[])
  return (
    <div className="App">
      <Post details={details} phones={phones} contacts={contacts} posts={posts} />
    </div>
  );
}

export default App;
 