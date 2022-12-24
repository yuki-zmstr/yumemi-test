import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

import styles from './stylesheets/index.module.css';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
