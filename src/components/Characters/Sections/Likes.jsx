import React from "react";
import "../Characters.css";

function Likes({ thisChar }) {
  return (
    <div>
      <ul>
        <span className="title">Enjoys</span>
        {thisChar.likes.map((cLikes) => (
          <li className="section" key={cLikes}>
            {cLikes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Likes;
