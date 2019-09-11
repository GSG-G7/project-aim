import React from "react";
import Bubble from "./Bubble";
import "./Canvas.css";

const createCanvas = (width, height) => {
  const arr = new Array(width);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(height).fill(0);
  }
  return arr;
};

const combineBubblesIntoCanvas = (bubbles, canvas) => {
  bubbles.forEach(bubble => {
    canvas[bubble[0]][bubble[1]] = 1;
  });
  return canvas;
};

export default ({ width, height, bubbles, bubbleOnClick, canvasOnClick }) => {
  const canvas = combineBubblesIntoCanvas(bubbles, createCanvas(width, height));
  return (
    <div className="canvas" onClick={canvasOnClick}>
      {canvas.map((e, i) =>
        e.map((e, j) => (
          <Bubble
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
