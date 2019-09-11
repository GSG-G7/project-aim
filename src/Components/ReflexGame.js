import React, { Component } from "react";
import Bubble from "./Bubble";
export default class ReflexGame extends Component {
  state = {
    record: Array(10).fill({ show: null, activated: null, clicked: null })
  };
  render() {
    console.dir(this.state.record);
    return (
      <>
        <h1>hi im Reflex game </h1>
        <div className="canvas">
          <Bubble />
        </div>
      </>
    );
  }
}
