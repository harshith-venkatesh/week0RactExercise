import { useState } from "react";
import "../styles.css";
export default function CharacterCount() {
  const [letter, setLetter] = useState("");
  let MaxCount = 50;
  const checkCount = (event) => {
    setLetter(event.target.value);
  };
  return (
    <div>
      <h4>Character Counter </h4>
      <input
        className="button"
        type="text"
        onChange={checkCount}
        value={letter}
      />
      <button
        className="button"
        disabled={letter.length > MaxCount}
        onClick={() => {
          console.log("Success");
        }}
      >
        Tweet
      </button>
      {letter && (
        <div>
          {letter.length}/{MaxCount}
        </div>
      )}
    </div>
  );
}
