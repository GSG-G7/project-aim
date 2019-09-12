import React, { Component } from "react";
import Bubble from "./Bubble";
import RecordList from "./RecordList";
const initStateRecord = Array(10).fill({
  show: null,
  activated: null,
  clicked: null
});
export default class ReflexGame extends Component {
  state = {
    start: false,
    stage: 0,
    record: initStateRecord,
    bubbleActive: false,
    bubbleHide: false
  };
  t = null;

  cloneAddCurrentTime = (key, goodClick = true) => {
    const { stage, record } = this.state;
    const newRecord = record.map(ele => ({ ...ele }));
    newRecord[stage][key] = goodClick ? Date.now() : 0;
    return newRecord;
  };

  // random time here :
  getRandomTime = () => Math.round(Math.random() * 7000) + 3000;
  showInactiveBubble = () => {
    const newRecord = this.cloneAddCurrentTime("show");
    this.setState({
      bubbleActive: false,
      bubbleHide: false,
      record: newRecord
    });
    this.showActiveBubble(this.getRandomTime());
  };
  showActiveBubble = delay => {
    this.t = setTimeout(() => {
      const newRecord = this.cloneAddCurrentTime("activated");
      this.setState({ bubbleActive: true, record: newRecord });
      this.t = setTimeout(this.popBubble, 1000);
    }, delay);
  };
  popBubble = () => {
    clearTimeout(this.t);

    const { stage, bubbleActive } = this.state;
    const newRecord = bubbleActive
      ? this.cloneAddCurrentTime("clicked")
      : this.cloneAddCurrentTime("clicked", false);

    this.setState({ record: newRecord, stage: stage + 1 });
    this.hideBubble();
    if (stage >= 9) this.endGame();
  };
  hideBubble = () => {
    this.setState({ bubbleHide: true });
    this.t = setTimeout(this.showInactiveBubble, 500);
  };
  startGame = () => {
    this.setState({ start: true, record: initStateRecord, stage: 0 });
    this.t = setTimeout(this.showInactiveBubble, 0);
  };
  endGame = () => {
    clearTimeout(this.t);
    // const bestGame = this.state
    this.setState({ start: false });
  };
  render() {
    const { bubbleActive, bubbleHide, start, record, stage } = this.state;
    return (
      <>
        <h1 onClick={start ? this.endGame : this.startGame}>
          {start ? "End" : "Start"}
        </h1>
        <div style={{ display: "flex" }}>
          <RecordList record={record} stage={stage} />
          <div className="reflex__canvas">
            {start ? (
              <Bubble
                className={
                  bubbleHide
                    ? ""
                    : `bubble ${
                        bubbleActive ? "bubble--active" : "bubble--inactive"
                      }`
                }
                onClick={this.popBubble}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}
