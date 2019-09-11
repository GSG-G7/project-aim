import React from "react";
import "./Bubble.css";
export default ({ className, onClick }) => (
  <div className={className} onClick={onClick}></div>
);
