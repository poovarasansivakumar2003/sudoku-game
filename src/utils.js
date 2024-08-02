// utils.js
export function validateSudoku(board) {
    // Check all rows, columns, and 3x3 grids
    for (let i = 0; i < 9; i++) {
        if (
            !isValidRow(board, i) ||
            !isValidColumn(board, i) ||
            !isValidGrid(board, Math.floor(i / 3) * 3, (i % 3) * 3)
        ) {
            return false;
        }
    }
    return true;
}

function isValidRow(board, row) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        const value = board[row][i];
        if (value && seen.has(value)) return false;
        seen.add(value);
    }
    return true;
}

function isValidColumn(board, col) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        const value = board[i][col];
        if (value && seen.has(value)) return false;
        seen.add(value);
    }
    return true;
}

function isValidGrid(board, startRow, startCol) {
    const seen = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = board[startRow + i][startCol + j];
            if (value && seen.has(value)) return false;
            seen.add(value);
        }
    }
    return true;
}