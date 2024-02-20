// need event listener to all of the cells
// need a forloop for the cells to select them 



// after each turn circle or x is added to the class of the board div 




// The game starts with player x - then need to alternate the turns when that player goes 

let board = document.getElementById("board")
let winner = document.getElementById("winningMessage")
let restart = document.getElementById("restartButton")
let cells = document.querySelectorAll(".cell")
let xTurn = true


// for (const individualCell of cells) {
//     individualCell.addEventListener("click", clickDone)
// }

cells.forEach(function(indyCell){
    indyCell.addEventListener("click", clickDone)
}
)



function clickDone(e){
    const cell = e.target

    if (xTurn === true) {
        cell.classList.add("x")
        xTurn = false
        }

        else{
            cell.classList.add("circle")
            xTurn = true
        }
}

// if three in a row then trigger winning message
// need to define the winning combinations - 8 of these - represtn the winning combos in index
// look through winning combinations for each winning combo - check cells[i] contains either x or circle (current turn)
// look at nested forloops and use that approach here 
// just need to check the last player that went only that player can win 


function checkWin(){
    if () {
        
    }
}
