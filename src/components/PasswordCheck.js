import { useState } from "react";

function checkForError(pass, confirmPass, setError) {
  const regex = new RegExp("[0-9]+[a-zA-Z]| *[a-zA-Z]+[0-9]");
  if (regex.test(pass)) {
    if (pass === confirmPass) {
      return setError();
    } else {
      return setError("Password doesn't match");
    }
  } else {
    return setError("Password doesn't contain numbers");
  }
}

const errorMessage = "Please enter letters and numbers for password!";
export default function PasswordCheck() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(errorMessage);
  const [viewPassword, setViewPassword] = useState("password");

  const checkAlphaNumeric = (event) => {
    setPass(event.target.value);
    checkForError(pass, confirmPass, setError);
  };

  const checkConfirm = (event) => {
    setConfirmPass(event.target.value);
    checkForError(pass, event.target.value, setError);
  };

  const resetPassword = () => {
    setPass("");
    setConfirmPass("");
    setError(errorMessage);
  };

  const checkVisibality = () => {
    setViewPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div>
      <h4>Password Checker</h4>
      <div style={{ margin: "1rem 2rem" }}>
        <label htmlFor="Enter Password">Enter Password: </label>
        <input
          type={viewPassword}
          onChange={checkAlphaNumeric}
          placeholder="Enter Password"
          value={pass}
        />{" "}
        <button onClick={checkVisibality}>
          {viewPassword === "password" ? "Show" : "Hide"}
        </button>
      </div>
      <div>
        <label htmlFor="Confirm Password">Confirm Password: </label>
        <input
          type="password"
          onChange={checkConfirm}
          placeholder="Confirm Password"
          value={confirmPass}
        />
      </div>

      <button
        className="button"
        disabled={error}
        onClick={() => console.log(pass)}
      >
        Submit
      </button>
      <button className="button" onClick={resetPassword}>
        Reset
      </button>
      <div style={{ margin: "1rem", color: "red" }}>{error}</div>
    </div>
  );
}
