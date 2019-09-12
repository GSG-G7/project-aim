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
        <section
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {home ? (
            <>
              <div className="tab" id={"aim"} onClick={this.handleTabChange}>
                <h2 id={"aim"}> Aim Game</h2>
                <p> Hint : you need to pop all the bubbles appears </p>
                <img
                  className="appImage"
                  src={
                    "https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/target-512.png"
                  }
                  alt={"aim game"}
                  id={"aim"}
                  onClick={this.handleTabChange}
                ></img>
              </div>
              <div className="tab" id={"reflex"} onClick={this.handleTabChange}>
                <h2 id={"reflex"}> Reflex Game</h2>
                <p>
                  {" "}
                  Hint : you must click on the bubble once it change it's color
                </p>
                <img
                  className="appImage"
                  src={
                    "https://www.bluefangsolutions.com/wp-content/uploads/2015/01/Reflex.jpg"
                  }
                  alt={"reflex game"}
                  id={"reflex"}
                  onClick={this.handleTabChange}
                ></img>
              </div>
            </>
          ) : (
            <div
              className="home-back"
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
