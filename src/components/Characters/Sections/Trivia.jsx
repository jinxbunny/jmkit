import React from "react";
import "../Characters.css";

function Trivia({ thisChar }) {
  return (
    <div>
      <ul>
        <span className="title">Trivia</span>
        {thisChar.trivia.map((cInfo) => (
          <li className="section" key={cInfo}>
            {cInfo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trivia;
