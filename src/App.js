import "./App.css";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import Box from "./components/Box";
import { useState } from "react";

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

function App() {
  const [userSelect, setUserSelect] = useState(0);
  const [computerSelect, setComputerSelect] = useState(0);
  const [userResult, setUserResult] = useState(null);
  const [computerResult, setComputerResult] = useState(null);

  const randomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const play = (num) => {
    setUserSelect(num);
    setComputerSelect(randomNumber());
    judgement(userSelect, computerSelect);
    setUserResult(judgement(userSelect, computerSelect));
    setComputerResult(judgement(computerSelect, userSelect));
  };

  const judgement = (user, computer) => {
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

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      <main className="mainWrap">
        <Box title="User" data={gameData[userSelect]} result={userResult} />
        <Box
          title="Computer"
          data={gameData[computerSelect]}
          result={computerResult}
        />
      </main>
      <div className="buttonWrap">
        <button onClick={() => play(0)}>Rock</button>
        <button onClick={() => play(1)}>Paper</button>
        <button onClick={() => play(2)}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
