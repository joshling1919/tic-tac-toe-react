import React from 'react';

const boardHash = {};

const Board = ({ isXTurn, changeTurns, numTurns }) => {
  const placeMarker = (e) => {
    const cell = e.currentTarget;
    if (cell.innerHTML === "") {
      if (isXTurn) {
        boardHash[parseInt(cell.id)] = "X"
        cell.innerHTML = "X";
        checkVictory("X");
      } else {
        boardHash[cell.id] = "O";
        cell.innerHTML = "O";
        checkVictory("O");
      }
      changeTurns();
    } else {
      console.log('Choose an empty spot!');
    }
  };

  const checkVertical = (marker) => {
    const verticals = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    checkThrees(verticals, marker);
  };

  const checkHorizontal = (marker) => {
    const horizontals = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    checkThrees(horizontals, marker);
  };

  const checkDiagonal = (marker) => {
    const diagonals = [
      [0, 4, 8],
      [2, 4, 6],
    ];
    checkThrees(diagonals, marker);
  };

  const checkThrees = (threes, marker) => {
    threes.forEach((el) => {
      if (boardHash[el[0]] === marker &&
          boardHash[el[1]] === marker &&
          boardHash[el[2]] === marker) {
          console.log("Game over!");
      }
    });
  };

  const checkVictory = (marker) => {
    if (numTurns >= 3) {
      checkVertical(marker);
      checkHorizontal(marker);
      checkDiagonal(marker);
    } else if (numTurns === 9) {
      console.log('It\'s a tie!');
    }
  };

  const cells = () => {
    let cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push(
        <div
          onClick={ placeMarker }
          className="cell"
          key={i}
          id={i}
        />
      );
    }
    return cells;
  };

  return(
    <div className="board" id="board">
      { cells() }
    </div>
  );
}

export default Board;
