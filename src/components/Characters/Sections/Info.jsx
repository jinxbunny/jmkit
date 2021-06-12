import React from "react";
import "../Characters.css";

function Info({ thisChar }) {
  return (
    <div>
      <ul>
        <span className="title">About</span>
        {thisChar.info.map((cInfo) => (
          <li className="section" key={cInfo}>
            {cInfo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
