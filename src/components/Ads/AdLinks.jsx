import React from "react";
import "../Pages/Pages.css";

class AdLinks extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <div className="adLinks">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1557905322999129"
          data-ad-slot="8613878305"
          data-ad-format="link"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

export default AdLinks;
