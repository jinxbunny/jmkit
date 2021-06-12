import React from 'react';

import { Link } from 'react-router-dom';

const NewsSideMain = ({ news }) => {
  return (
    <Link
      to={{
        pathname: `/${news.link1}`,
        state: {
          item: news.prop,
        },
      }}
    >
      <div className="headlineImg">
        <img src={news.icon} alt={news.type} />
        &nbsp;
        {news.headline}
      </div>
      <div className="newsPrevPic">
        <img src={news.img} alt={news.type} />
      </div>
      <br />
    </Link>
  );
};

export default NewsSideMain;
