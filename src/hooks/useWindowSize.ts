import React, { useEffect, useState } from "react";

export type WindowSize = {
  width: number;
  height: number;
};

export type onWindowResize = (windowSize: WindowSize) => void;

export const useWindowSize = (callback: onWindowResize) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      callback({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);

  return windowSize;
};
