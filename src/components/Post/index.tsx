import React from 'react';

import styles from './Post.module.scss';

interface PostProps {
  name: string;
}

export const Post = ({ name }: PostProps) => {
  return <div className={styles.wrapper}>{name}</div>;
};
