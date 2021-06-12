import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Hyvor from '../../Chat/Hyvor';
import HyvorTalk from 'hyvor-talk-react';
import { HashLink } from 'react-router-hash-link';

const ArticleMain = ({ article }) => {
  const WEBSITE_ID = 1987;
  const HEADLINE = article.headline.replace(/\s/g, '').toLowerCase();
  const PAGE_ID = HEADLINE;

  let newsContent;
  let externalLink;
  let image2;

  if (article.img2) {
    image2 = <img src={article.img2} alt={article.headline} />;
  } else {
    image2 = '';
  }

  if (article.type === 'Video') {
    newsContent = (
      <div className="newsVideo">
        <iframe
          title="YouTube"
          width="100%"
          height="384"
          src={article.link2}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
    externalLink = (
      <div>
        <a href={article.exLink}>
          <h3>Watch on YouTube</h3>
        </a>
      </div>
    );
  } else {
    newsContent = (
      <div
        className="newsPic"
        style={{
          height: `100px`,
          width: `90%`,
          backgroundImage: `url(${article.img})`,
        }}
      ></div>
    );
    externalLink = <div></div>;
  }
  return (
    <div>
      <Helmet>
        <title>JMKit.com: News: {article.headline}</title>
      </Helmet>
      <h1>News and Updates</h1>
      <div className="behindText articlePage">
        <div className="articleHeadline">
          <h1>{article.headline}</h1> <h3>{article.date}</h3>
        </div>
        <div className="commentCount">
          <HashLink to="#chat">
            <HyvorTalk.CommentCount websiteId={WEBSITE_ID} id={PAGE_ID} />
          </HashLink>
        </div>
        {newsContent}
        <br />
        <h2 className="articleSection">{article.text}</h2>
        {image2}
        <h2 className="articleSection">{article.text2}</h2>
        {externalLink}
        <br />
        <Link to={article.link1}>
          <div className="colorButton">
            <h3>Check out the JMKit {article.type} Page!</h3>
          </div>
        </Link>
      </div>
      <div id="chat">
        <Hyvor WEBSITE_ID={WEBSITE_ID} PAGE_ID={PAGE_ID} />
      </div>
    </div>
  );
};

export default ArticleMain;
