import React from 'react';
import { Link } from 'react-router-dom';
import AllComics from './AllComics';

import '../Theme.css';
import './Comics.css';

import Helmet from 'react-helmet';

const Comics = () => {
  return (
    <div>
      <Helmet>
        <title>JMKit.com: Comics</title>
      </Helmet>
      <h1>Comics</h1>
      <div className="basicPage">
        <div className="storeWindow">
          {AllComics.map((Comic) => (
            <Link to={`/comics/${Comic.shortName}`}>
              <div className="comicGallery" key={Comic.id}>
                <div
                  className="comicLink"
                  style={{ backgroundImage: `url(${Comic.Img}` }}
                />
                <div>{Comic.Name}</div>
              </div>
            </Link>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Comics;
