import './App.css';
import Board from './Board';
import Info from "./Info";
import { useState } from "react";

function App() {
  const [winner, setWinner] = useState("");
  return (
    <div className="App">
      <div>
      <div className="winner-text">{winner}</div>
        <button>
          Reset Board
        </button>
      </div>
      <Board />
      <Info />
    </div>
  );
}

export default App;
