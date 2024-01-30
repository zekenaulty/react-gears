import React, { useRef, useEffect } from "react";
import Gears from "./gears/Gears";
import { useWindowSize, WindowSize } from "./hooks/useWindowSize";

document.body.style.overflow = "hidden";
document.body.style.margin = "0 0 0 0";
document.body.style.padding = "0 0 0 0";

function App() {
  const { width, height } = useWindowSize((size: WindowSize) => {});

  return (
    <>
      <Gears></Gears>
      <div
        style={{
          position: "absolute",
          color: "black",
          fontSize: "0.6em",
          fontFamily: "monospace",
          top: "10px",
          right: "10px",
          width: "110px",
          backgroundColor: "white",
          padding: "0 0 0 0",
          margin: "0 0 0 0",
          border: "1px solid black",
          borderRadius: "5px",
          display: "block",
          zIndex: "1000",
          textAlign: "right",
        }}
      >
        <div style={{ padding: "0.5em" }}>Window Width: {width}</div>
        <div style={{ padding: "0.5em" }}>Window Height: {height}</div>
      </div>
    </>
  );
}

export default App;
