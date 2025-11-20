import React from "react";

function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Generate Quote</button>
    </div>
  );
}

export default Button;
