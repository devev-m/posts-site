import React from 'react';

import styles from './Post.module.scss';

interface PostProps {
  name: string;
  body: string;
}

export const Post = ({ name, body }: PostProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{name}</div>
      <div className={styles.description}>{body}</div>
    </div>
  );
};
