import React from 'react';
import '../Pages/Pages.css';

class Ad extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1557905322999129"
          data-ad-slot="5266992488"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

export default Ad;
