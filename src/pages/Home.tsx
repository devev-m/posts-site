import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IPost } from '../models/Post';
import { Post } from '../components/Post';
import { Pagination } from '../components/Pagination';

export const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  // Pagination

  const endOffset = itemOffset + 10;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / 10);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % posts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setLoading(true);

    async function fetchPosts() {
      try {
        await axios
          .get<IPost[]>('https://jsonplaceholder.typicode.com/comments')
          .then((response) => setPosts(response.data))
          .catch((error) => console.log(error));

        setLoading(false);
      } catch (error) {
        console.log(`error: ${error}`);
        alert('Ошибка при запросе постов!');
      }
    }

    setTimeout(() => fetchPosts(), 1000);
  }, []);

  return (
    <div className="container">
      {loading === true ? (
        <h1>Идет загрузка постов...</h1>
      ) : (
        <>
          <h1>Titles:</h1>
          <div>
            {currentItems.map((post) => (
              <Post
                key={post.id}
                {...post}
              />
            ))}
          </div>
        </>
      )}
      <Pagination
        onPageChange={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};
