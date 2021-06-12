import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = () => {
  const address = 'https://www.jmkit.com/characters/boo.html';

  return (
    <div>
      <h1>disqus test</h1>
      <DiscussionEmbed
        shortname="jmkitfriends"
        config={{
          url: address,
          identifier: this.props.article.id,
          title: this.props.article.title,
          language: 'en',
        }}
      />
    </div>
  );
};

export default Disqus;
