const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const PLAYER_ONE_CLASS = "x";
const PLAYER_TWO_CLASS = "circle";

const board = document.getElementById("board");
const winner = document.getElementById("winningMessage");
const winnerMessage = document.getElementById("winningMessageText");
const restart = document.getElementById("restartButton");
const cells = document.querySelectorAll(".cell");
let xTurn = true; //state of the application - saying whether it x turn or circle turn
let noOfTurns = 0; //stores the number of turns for a draw state

function clickDone(e) {
  const cell = e.target;
  noOfTurns = noOfTurns + 1;
  const activePlayerClass = xTurn ? PLAYER_ONE_CLASS : PLAYER_TWO_CLASS;
  const inactivePlayerClass = xTurn ? PLAYER_TWO_CLASS : PLAYER_ONE_CLASS;

  cell.classList.add(activePlayerClass);
  board.classList.remove(activePlayerClass);
  board.classList.add(inactivePlayerClass);
  xTurn = !xTurn;
  if (checkWin(activePlayerClass) || noOfTurns === 9) {
    winner.classList.add("show");
    winnerMessage.textContent = checkWin(activePlayerClass)
      ? `${activePlayerClass} has won! click button below to restart`
      : "It's a draw!";
  }
}

function checkWin(currentPlayer) {
  for (
    let i = 0;
    i < WINNING_COMBOS.length;
    i++ //spits back each array
  ) {
    let win = true;
    for (let j = 0; j < WINNING_COMBOS[i].length; j++) {
      //goes through the array (i)
      let cell = WINNING_COMBOS[i][j];
      if (!cells[cell].classList.contains(currentPlayer)) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}

restart.addEventListener("click", restartGame);

function restartGame() {
  winnerMessage.textContent = "";
  winner.classList.remove("show");
  cells.forEach(function (indyCell) {
    indyCell.classList.remove(PLAYER_ONE_CLASS);
    indyCell.classList.remove(PLAYER_TWO_CLASS);
    indyCell.removeEventListener("click", clickDone);
    indyCell.addEventListener("click", clickDone, { once: true });
  });
  xTurn = true;
  noOfTurns = 0;
}

restartGame();

//   if (xTurn === true) {
//     cell.classList.add(PLAYER_ONE_CLASS);
//     board.classList.remove(PLAYER_ONE_CLASS);
//     board.classList.add(PLAYER_TWO_CLASS);
//     xTurn = false;
//     if (checkWin(PLAYER_ONE_CLASS) || noOfTurns === 9) {
//       winner.classList.add("show");
//       winnerMessage.textContent = checkWin(PLAYER_ONE_CLASS)
//         ? "x has won! click button below to restart"
//         : "It's a draw!";
//     }
//   } else {
//     cell.classList.add(PLAYER_TWO_CLASS);
//     xTurn = true;
//     board.classList.remove(PLAYER_TWO_CLASS);
//     board.classList.add(PLAYER_ONE_CLASS);
//     if (checkWin(PLAYER_TWO_CLASS) || noOfTurns === 9) {
//       winner.classList.add("show");
//       winnerMessage.textContent = checkWin(PLAYER_TWO_CLASS)
//         ? "circle has won! click button below to restart"
//         : "It's a draw!";
//     }
//   }
// }

// if three in a row then trigger winning message
// need to define the winning combinations - 8 of these - represtn the winning combos in index
// look through winning combinations for each winning combo - check cells[i] contains either x or circle (current turn)
// look at nested forloops and use that approach here
// just need to check the last player that went only that player can win
