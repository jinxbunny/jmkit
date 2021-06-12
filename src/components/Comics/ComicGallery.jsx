import React from 'react';
import AllComics from './AllComics';
import './Comics.css';

const ComicGallery = () => {
  return AllComics.map((Comic) => (
    <div className="comicGallery">
      <img src={Comic.Img} alt={Comic.name} />
      <div>{Comic.Name}</div>
    </div>
  ));
};

export default ComicGallery;
