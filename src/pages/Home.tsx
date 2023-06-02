import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IPost } from '../models/Post';
import { Post } from '../components/Post';

export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        await axios
          .get<IPost[]>('https://jsonplaceholder.typicode.com/comments')
          .then((response) => setPosts(response.data))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(`error: ${error}`);
        alert('Ошибка при запросе постов!');
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>Titles:</h1>
      <div className="">
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};
