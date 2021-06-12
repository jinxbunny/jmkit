import React, { useState } from 'react';
import AllNews from './AllNews';
import News from './News';
import './News.css';

import newsIconMore from '../../../img/icons/morenews_icon.png';
import newsIconLess from '../../../img/icons/lessnews_icon.png';

const NewsFullSection = () => {
  const allArticles = AllNews;
  const latest = AllNews.slice(0, 4);

  const [newsAmount, setNews] = useState(latest);
  const [buttonIcon, setIcon] = useState(newsIconMore);
  const [buttonText, setText] = useState('All News..');

  function updateFeed() {
    if (buttonText === 'All News..') {
      setNews(allArticles);
      setIcon(newsIconLess);

      setText('..Latest News');
    } else if (buttonText === '..Latest News') {
      setNews(latest);
      setIcon(newsIconMore);
      setText('All News..');
    }
  }
  return (
    <div>
      <h1>Recent Updates</h1>
      <div className="behindText">
        {newsAmount.map((fNews) => (
          <News key={fNews.id} news={fNews} />
        ))}
      </div>
      <div className="moreNews">
        <button className="newsButton" onClick={updateFeed}>
          <img src={buttonIcon} alt={buttonText} />
        </button>
      </div>
    </div>
  );
};

export default NewsFullSection;
