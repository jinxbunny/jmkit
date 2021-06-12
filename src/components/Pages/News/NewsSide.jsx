import React from 'react';
import { Link } from 'react-router-dom';
import AllNews from './AllNews';
import './News.css';

const NewsSide = () => {
  const latest = AllNews.slice(0, 2);

  return (
    <div className="behindText">
      <h2>Latest Updates</h2>
      <br />
      {latest.map((fNews) => (
       <div>
         <Link to={`/articles/${fNews.id}`}>
      <div className="newsPrevPic">
        <img src={fNews.img} alt={fNews.type} />
      </div>
      <div className="colorButton">
        {fNews.headline}
      </div>
      <br />
         </Link>
       </div>
      ))}
      <Link to={'/'}>
      <div className="colorButton">
        <h3>All News</h3>
        </div>
      </Link> 
    </div>
  );
};

export default NewsSide;
