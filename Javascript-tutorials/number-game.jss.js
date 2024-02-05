// need to insert class name dynamically using javascript on the div with ID hint
// need to generate random number every time a new game is started for the user to get
// store the number of guesses in <span id="noOfGuesses"> 
// and store guessed numbers are in <span id="guessedNums">-</span>

let guessButton = document.getElementById("guessSubmit")
let guess = document.getElementById("guess")
let guessesTried = document.getElementById("noOfGuesses")
let guessedNo = document.getElementById("guessedNums")
let highScore = document.getElementById("highScore")
let hint = document.getElementById("hint")
let game = document.getElementById("game")


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

let answer = getRandomArbitrary(1, 100)


let guesses = 0
let guessed = [0]

guessButton.addEventListener("click",function guessClicked() {
   guesses = guesses + 1
   guessesTried.textContent = guesses

   guessed.push(guess.value)
   guessedNo.textContent = guessed

    if (guess.value < answer) {
        hint.textContent = "the answer is too low"
        hint.classList.add("error")
    }else if (guess.value > answer) {
        hint.textContent = "the answer is too high"
        hint.classList.add("error")
    }
else {
    game.style.opacity = 0
    hint.textContent = "winner"
    hint.classList.add("success")
}
}

)


// 




//   function getRandomNumber() {
//     return Math.floor(Math.random() * 100)+1;
//   }