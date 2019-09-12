import React, { Component } from "react";
import Canvas from "./Canvas";

export default class AimGame extends Component {
  state = {
    start: false,
    bubbles: [],
    score: 0,
    lives: 5
  };
  t = null;
  generateRandomCoordinates = () => {
    const random = () => Math.floor(Math.random() * 10);
    return [random(), random()];
  };

  showBubble = () => {
    const newCoor = this.generateRandomCoordinates();
    let i = this.state.bubbles.find(([first, second]) => {
      const [newFirst, newSecond] = newCoor;
      return newFirst === first && newSecond === second;
    });
    if (!i) {
      this.setState(({ bubbles }) => ({
        bubbles: [...bubbles, newCoor]
      }));
      this.t = setTimeout(this.showBubble, 500);
    } else {
      this.showBubble();
    }
  };
  incScore = id => {
    this.setState({ score: this.state.score + 100 });
    this.hideBubble(id);
  };
  decScore = () => {
    if (this.state.lives === 1) this.endGame();
    this.setState(({ score, lives }) => ({
      score: score - 80,
      lives: lives - 1
    }));
  };
  hideBubble = id => {
    const [first, second] = id.toString().split("");
    const coor = [+first, +second];
    const newState = this.state.bubbles.filter(([first, second]) => {
      const [newFirst, newSecond] = coor;
      return !(newFirst === first && newSecond === second);
    });
    this.setState({ bubbles: newState });
  };
  startGame = () => {
    this.setState({ start: true, score: 0 });
    this.t = setTimeout(this.showBubble, 500);
  };

  endGame = () => {
    clearTimeout(this.t);
    // // save record in local storage ...
    this.setState({ start: false, bubbles: [] });
  };
  render() {
    const { bubbles, start, score, lives } = this.state;
    return (
      <>
        <h1 onClick={start ? this.endGame : this.startGame}>
          {start ? "End" : "Start"}
        </h1>
        <h1>
          your score is : {score} lives: {lives}
        </h1>
        <Canvas
          width={10}
          height={10}
          bubbles={bubbles}
          bubbleOnClick={this.incScore}
          canvasOnClick={this.decScore}
        />
      </>
    );
  }
}
