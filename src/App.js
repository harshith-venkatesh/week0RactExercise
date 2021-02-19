import { useState } from "react";
import { Exercises } from "./components/Exercises";
import { NavComponent } from "./components/NavComponent";

import SmallFigma from "./components/SmallFigma";
import { Toast } from "./components/Toast";
import "./styles.css";

export default function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="App">
      <NavComponent setRoute={setRoute} />
      {route === "home" && (
        <div style={{ textAlign: "center" }}>
          <Exercises />
        </div>
      )}
      {route === "figma" && <SmallFigma />}
      {route === "toast" && <Toast />}
    </div>
  );
}
