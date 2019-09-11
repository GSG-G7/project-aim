import React from "react";
import "./Bubble.css";
export default ({ className, onClick, id }) => (
  <div className={className} onClick={onClick} id={id}></div>
);
