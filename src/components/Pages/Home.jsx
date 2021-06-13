import React from 'react';

import './Home.css';

import MainNews from './News/NewsFullSection';
import Feature from '../Pages/Feature';

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Update Tests</h1>
      <Feature />
      <MainNews />
    </div>
  );
};

export default Home;
