import React from "react";
import Bubble from "./Bubble";
import "./Canvas.css";

const createCanvas = units => {
  const arr = new Array(units);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(units).fill(0);
  }
  return arr;
};

const combineBubblesIntoCanvas = (bubbles, canvas) => {
  bubbles.forEach(bubble => {
    canvas[bubble[0]][bubble[1]] = 1;
  });
  return canvas;
};

export default ({ units, bubbles, bubbleOnClick, canvasOnClick }) => {
  const canvas = combineBubblesIntoCanvas(bubbles, createCanvas(units));
  return (
    <div
      className="canvas"
      onClick={canvasOnClick}
      // style={{
      //   height: `${units * units * units * 0.5}px`,
      //   width: `${units * units * units * 0.5}px`
      // }}
    >
      {canvas.map((e, i) =>
        e.map((e, j) => (
          <Bubble
            units={units}
            className={`bubble ${e ? "bubble--inactive" : ""}`}
            onClick={
              e
                ? event => {
                    event.stopPropagation();
                    bubbleOnClick(event.target.id);
                  }
                : undefined
            }
            key={i + "" + j}
            id={i + "" + j}
          />
        ))
      )}
    </div>
  );
};
