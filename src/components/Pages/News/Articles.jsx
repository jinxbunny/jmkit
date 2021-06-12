import React from 'react';
import { Link } from 'react-router-dom';

import AllNews from './AllNews';

import Helmet from 'react-helmet';

const Articles = ()=>{
    return (
      <div>
        <Helmet>
          <title>JMKit.com: News and Updates</title>
        </Helmet>
        <h1>News And Updates</h1>
        {AllNews.map((filteredNews)=> (
          <Link to={{ pathname: `/articles/${filteredNews.id}`}}>
          <div>
            <h2>{filteredNews.headline}: {filteredNews.date}</h2>
            <br/>
            </div>
            </Link>
        ))}
    </div>
    );
  
};

export default Articles;
