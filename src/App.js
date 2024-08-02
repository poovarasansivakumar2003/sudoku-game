import React, { useState } from "react";
import "./App.css";
import SudokuBoard from "./components/SudukoBoard.js";
import { validateSudoku } from "./utils.js";

const initialBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

function App() {
  const [board, setBoard] = useState(initialBoard);

  const handleInputChange = (row, col, value) => {
    const updatedBoard = [...board];
    updatedBoard[row][col] = value ? parseInt(value) : null;
    setBoard(updatedBoard);
  };

  const handleSubmit = () => {
    if (validateSudoku(board)) {
      alert("Congratulations! You solved the Sudoku.");
    } else {
      alert("There are errors in your solution. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Sudoku Game</h1>
      <SudokuBoard board={board} onInputChange={handleInputChange} />
      <button onClick={handleSubmit}>Check Solution</button>
    </div>
  );
}

export default App;