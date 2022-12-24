import React from 'react';
import styles from '../stylesheets/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>株式会社ゆめみ入社試験</h1>
      <h2 className={styles.subtitle}>都道府県別人口推移</h2>
    </div>
  );
}

export default Header;
