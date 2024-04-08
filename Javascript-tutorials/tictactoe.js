// when someone clicks on a cell it places an X or a O
// when done next turn is the opponenets turn
// when someone gets three in a row it triggers winning message
// when its a tie it triggers 'its a draw' message

const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const winningMessage = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");

// function for WHEN restart button is clicked

function init() {}

// function for when cell clicked

function cellClicked() {}

// For loop for individualsing all the cells - event listenting for when cell is clicked

for (const cell of cells) {
  cell.addEventListener("click", cellClicked);
}

//  event listenr for when restart button is clicked
restartButton.addEventListener("click", init);
