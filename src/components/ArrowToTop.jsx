import React, { useState } from 'react';
import upArrowIcon from '../img/icons/upArrow_icon.png';

const ArrowToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <img
      src={upArrowIcon}
      alt="to top"
      className="scrollTop"
      onClick={scrollTop}
      style={{
        height: 48,
        width: 48,
        display: showScroll ? 'flex' : 'none',
      }}
    />
  );
};

export default ArrowToTop;
