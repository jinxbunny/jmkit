import React from "react";
import "../Characters.css";

function Dislikes({ thisChar }) {
  return (
    <div>
      <span className="title">Pet Peeves</span>
      <ul>
        {thisChar.dislikes.map((cDislikes) => (
          <li className="section" key={cDislikes}>
            {cDislikes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dislikes;
