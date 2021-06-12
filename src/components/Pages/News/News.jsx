import React from 'react';
import { Link } from 'react-router-dom';

import './News.css';
import '../../Theme.css';

const News = ({ news }) => {
  let newsContent;

  if (news.type === 'Video') {
    newsContent = (
      <div className="newsVideo">
        <iframe
          title="YouTube"
          width="100%"
          height="315"
          src={news.link2}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  } else {
    newsContent = (
      <div
        className="newsPic"
        style={{
          height: `100px`,
          width: `90%`,
          backgroundImage: `url(${news.img})`,
        }}
      ></div>
    );
  }
  return (
    <div className="newsArticle">
      <div style={{ width: `100%` }}>{news.headline}</div>
      <div className="newsMainC">{newsContent}</div>
      <div className="newsPreview">
        <div className="newsMain">{news.text}</div>
      </div>
      <Link to={{ pathname: `/articles/${news.id}`, state: { item: news.id } }}>
        <div className="moreButton">Read More..</div>
      </Link>
    </div>
  );
};

export default News;
