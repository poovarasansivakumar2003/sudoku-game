import React from "react";

function SudokuBoard({ board, onInputChange }) {
    return (
        <div className="sudoku-board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="sudoku-row">
                    {row.map((cell, colIndex) => (
                        <input
                            key={`${rowIndex}-${colIndex}`}
                            className="sudoku-cell"
                            type="text"
                            value={cell || ""}
                            onChange={(e) => onInputChange(rowIndex, colIndex, e.target.value)}
                            maxLength="1"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SudokuBoard;