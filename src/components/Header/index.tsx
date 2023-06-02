import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <span>
            <Link to="/">Главная</Link>
          </span>
          <span>
            <Link to="/about">Обо мне</Link>
          </span>
        </nav>
      </div>
    </header>
  );
};
