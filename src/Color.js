import React from "react";
import { Link , Navigate} from "react-router-dom";
import "./Color.css";

function Color({hex, color, history}) {
  if (!hex) {
    Navigate("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;