import { useEffect, useRef, useState } from "react";

export const useAnimationFrame = (
  callback: (timestamp: number) => void,
): (() => void) => {
  const requestRef = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(true);

  const animate = (timestamp: number) => {
    if (isAnimatingRef.current) {
      callback(timestamp);
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback]);

  const stopAnimation = () => {
    isAnimatingRef.current = false;
  };

  return stopAnimation;
};
