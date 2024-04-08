const guessButton = document.getElementById("guessSubmit");
const guess = document.getElementById("guess");
const guessesTried = document.getElementById("noOfGuesses");
const guessedNo = document.getElementById("guessedNums");
const highScore = document.getElementById("highScore");
const hint = document.getElementById("hint");
const game = document.getElementById("game");
const restart = document.getElementById("restart");

let answer;
let guesses;
let guessed;
let highestScore = 0;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function handleGuess() {
  hint.classList.remove("error", "sucess");
  guesses = guesses + 1;
  guessesTried.textContent = guesses;
  guessed.push(guess.value);
  guessedNo.textContent = guessed;

  hint.style.display = "block";

  if (guess.value < answer) {
    hint.textContent = "the answer is too low";
    hint.classList.add("error");
  } else if (guess.value > answer) {
    hint.textContent = "the answer is too high";
    hint.classList.add("error");
  } else {
    game.style.display = "none";
    hint.textContent =
      "Congratulations you managed to get the right answer in " +
      guessed.length +
      " attempts!";
    hint.classList.add("success");
    restart.style.display = "block";
    if (100 - guesses - 1 > highestScore) {
      highScore.textContent = 100 - guesses - 1;
    }
  }
}

function init() {
  answer = getRandomArbitrary(1, 100);
  guesses = 0;
  guessesTried.textContent = 0;
  guessed = [];
  guessedNo.textContent = "-";
  guess.value = null;
  game.style.display = "block";
  hint.classList.remove("success");
  hint.style.display = "none";
  restart.style.display = "none";
}

guess.addEventListener("keydown", function guessClicked(e) {
  if (e.code === "Enter") {
    handleGuess();
  }
});

guessButton.addEventListener("click", handleGuess);

restart.addEventListener("click", init); // when you add bracket means you want to EXECUTE the function - here, you only want the fucntion to execute when someones CLICKS the button

init();
