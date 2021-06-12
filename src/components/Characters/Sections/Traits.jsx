import React from "react";
import "../Characters.css";

function Traits({ thisChar }) {
  return (
    <div>
      <span className="title">Traits</span>
      <ul>
        {thisChar.traits.map((cTraits) => (
          <li className="section" key={cTraits}>
            {cTraits}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Traits;
