import React, { useEffect, useState } from 'react'
import './App.css';
import Nav from './Nav';
import Title from './Title';
import axios from 'axios';
const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        // console.log(response);
        setPosts(response.data);
      })
      .catch(error => alert('Error fetching posts'));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App">

      {posts.length > 0 ? posts.map((post, i) => (
        <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
          <div className="col pt-3 pb-2">
            <h2>{post.title}</h2>
            <p className="lead">{post.content.substring(0, 100)}</p>
            <p>
              Author <span className="badge">{post.user}</span> Published on{' '}
              <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
            </p>
          </div>
        </div>
      )) : <h1>no posts</h1>}

    </div>
  );
}

export default App;
