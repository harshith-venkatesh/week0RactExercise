import React, { useState } from "react";

const buttonClass = { margin: "2rem" };
export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      <h4> {counter}</h4>
      <div style={buttonClass}>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          <span role="img" aria-label="minus">
            ➕
          </span>
        </button>{" "}
        <button
          disabled={!counter}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          <span role="img" aria-label="minus">
            ➖
          </span>
        </button>
      </div>
    </div>
  );
}
