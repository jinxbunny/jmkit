import React from 'react';
import { Link } from 'react-router-dom';
import AllVideos from './AllVideos';
// import VideoTags from './VideoTags';

import '../Theme.css';
import './Videos.css';

import Helmet from 'react-helmet';

// function Themes(nameKey, AllVideos) {
//   for (var i = 0; i < AllVideos.length; i++) {
//     if (AllVideos[i].type === nameKey) {
//       return AllVideos[i];
//     }
//   }
// }

const Videos = () => {
  let newVids = AllVideos.slice().reverse();
  // let unique = [...new Set(AllVideos)];
  return (
    <div>
      <Helmet>
        <title>JMKit.com: Videos</title>
      </Helmet>
      <h1>Videos</h1>
      {/* <h2>Themes</h2>
      {AllVideos.map((fM) => (
        <VideoTags key={fM.id} gallery={fM} />
      ))} */}
      <h3>Did you see..</h3>
      <div className="basicPage">
        <div className="videoGallery">
          {newVids.map((Video) => (
            <Link
              to={`/videos/${Video.Name.replace(/\s+/g, '').toLowerCase()}`}
            >
              <div key={Video.id}>
                <div>
                  <img src={Video.Thumb} alt={Video.name} />
                </div>
                <div className="videoGalleryTitle">{Video.Name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
