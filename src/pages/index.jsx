import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

import { main } from '../stylesheets/index.module.css';

function IndexPage() {
  return (
    <div className={main}>
      <Header />
      <Body />
    </div>
  );
}

export default IndexPage;
