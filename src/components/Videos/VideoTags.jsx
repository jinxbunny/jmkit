import React from 'react';

const VideoTags = ({ gallery }) => {
  const tag = gallery.type;
  const unique = [...new Set(tag)];
  return (
    <div>
      <div className="videoTags">{unique}</div>
    </div>
  );
};

export default VideoTags;
