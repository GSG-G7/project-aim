import React from "react";
import "./Bubble.css";
export default ({ units, className, onClick, id }) => (
  <div
    className={className}
    onClick={onClick}
    id={id}
    // style={{
    //   width: `${units * units * 0.5}px`,
    //   height: `${units * units * 0.5}px`
    // }}
  ></div>
);
