import React, { useRef, useEffect } from "react";

import { Circle } from "../canvas/Circle";
import { PolygonRounded } from "../canvas/PolygonRounded";
import { Polygon } from "../canvas/Polygon";

import { useAnimationFrame } from "../hooks/useAnimationFrame";

const Gears: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const poly = new Polygon({
    points: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 },
    ],
    x: 10,
    y: 10,
  });

  const circle = new Circle({
    x: 7.5,
    y: 7.5,
    radius: 45,
  });

  const resizeObserver = new ResizeObserver((entries) => {
    if (canvasRef.current) {
      canvasRef.current.width = entries[0].contentRect.width;
      canvasRef.current.height = entries[0].contentRect.height;
    }
  });

  const stopAnimation = useAnimationFrame(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        const scaleX = window.innerWidth / canvas.width;
        const scaleY = window.innerHeight / canvas.height;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.scale(1, 1);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.globalCompositeOperation = "source-over";
        context.save();

        const dc = {
          context: context as CanvasRenderingContext2D,
          stroke: "black",
          fill: "silver",
          lineWidth: 3,
          mask: false,
        };

        const dcm = {
          context: context as CanvasRenderingContext2D,
          stroke: "black",
          fill: "silver",
          lineWidth: 3,
          mask: true,
        };

        poly.draw(dc);
        circle.draw(dcm); //using this masking technique, means you should use many canvas elements and composite your final result.
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: `0px`,
        left: `0px`,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default Gears;

/*  

        new Circle({
          x: 10,
          y: 10,
          radius: 100,
        }).draw({
          context: context as CanvasRenderingContext2D,
          stroke: "black",
          fill: "silver",
          lineWidth: 3,
          mask: false,
        });

        new Circle({
          x: 35,
          y: 35,
          radius: 50,
        }).draw({
          context: context as CanvasRenderingContext2D,
          stroke: "black",
          fill: "silver",
          lineWidth: 3,
          mask: true,
        });
*/
