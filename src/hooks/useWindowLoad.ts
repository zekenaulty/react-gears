import { useEffect } from "react";

export const useWindowLoad = (callback: () => void): void => {
  useEffect(() => {
    const handleLoad = () => {
      callback();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [callback]);
};
