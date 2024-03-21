import React, { Component } from "react";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import BoxClass from "./components/BoxClass";
import "./App.css";

const gameData = [
  {
    name: "rock",
    url: rock,
  },
  {
    name: "paper",
    url: paper,
  },
  {
    name: "scissors",
    url: scissors,
  },
];

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: 0,
      computerSelect: 0,
      userResult: null,
      computerResult: null,
    };
  }

  play = (num) => {
    let computerChoice = this.randomNumber();

    this.setState({
      userSelect: num,
      computerSelect: computerChoice,
      userResult: this.judgement(
        this.state.userSelect,
        this.state.computerSelect
      ),
      computerResult: this.judgement(
        this.state.computerSelect,
        this.state.userSelect
      ),
    });
  };

  randomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  judgement = (user, computer) => {
    if (user === computer) {
      return "tie";
    } else if (user === 0) {
      return computer === 1 ? "lose" : "win";
    } else if (user === 1) {
      return computer === 2 ? "lose" : "win";
    } else if (user === 2) {
      return computer === 0 ? "lose" : "win";
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Rock Paper Scissors</h1>
        <main className="mainWrap">
          <BoxClass
            title="User"
            data={gameData[this.state.userSelect]}
            result={this.state.userResult}
          />
          <BoxClass
            title="Computer"
            data={gameData[this.state.computerSelect]}
            result={this.state.computerResult}
          />
        </main>
        <div className="buttonWrap">
          <button onClick={() => this.play(0)}>Rock</button>
          <button onClick={() => this.play(1)}>Paper</button>
          <button onClick={() => this.play(2)}>Scissors</button>
        </div>
      </div>
    );
  }
}
