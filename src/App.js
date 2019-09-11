import React from "react";
import ReflexGame from "./Components/ReflexGame";
import AimGame from "./Components/AimGame";
import "./App.css";

class App extends React.Component {
  state = {
    tab: { aim: false, reflex: false, home: true }
  };
  handleTabChange = ({ target: { id } }) =>
    this.setState({
      tab: {
        aim: id === "aim",
        reflex: id === "reflex",
        home: id === "home"
      }
    });
  render() {
    const {
      tab: { home, reflex, aim }
    } = this.state;
    return (
      <div className="App">
        <header></header>
        <section>
          {home ? (
            <>
              <div className="tab" id={"aim"} onClick={this.handleTabChange}>
                <img
                  src={"/"}
                  alt={"aim game"}
                  id={"aim"}
                  onClick={this.handleTabChange}
                ></img>
              </div>
              <div className="tab" id={"reflex"} onClick={this.handleTabChange}>
                <img
                  src={"/"}
                  alt={"reflex game"}
                  id={"reflex"}
                  onClick={this.handleTabChange}
                ></img>
              </div>
            </>
          ) : (
            <div
              className="home-tab"
              id={"home"}
              onClick={this.handleTabChange}
            >
              back{" "}
            </div>
          )}
          {reflex ? <ReflexGame /> : ""}
          {aim ? <AimGame /> : ""}
        </section>
      </div>
    );
  }
}

export default App;
