import React from 'react';

import AllNews from './AllNews'
import ArticleMain from './ArticleMain'

import {useRouteMatch } from 'react-router';

const ArticlePage = ()=>{
  
  const Route = useRouteMatch();

  const thisArticle = Route.url.split('/articles/').pop();
  const clearArticle = thisArticle.replace('/', '');
  const actualNum = parseFloat(clearArticle)

    return (
      <div>
        {AllNews.filter(
          (article) => article.id === actualNum
          ).map((filteredArticle) => (
            <ArticleMain
            key={filteredArticle.id}
            article={filteredArticle}
            />
          ))}
    </div>
    );
  
};

export default ArticlePage;
