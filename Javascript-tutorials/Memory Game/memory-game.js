// get all the fruits stored in an fruits

const fruits = [
  "cherry",
  "chilly",
  "grape",
  "lemon",
  "oranges",
  "pineapple",
  "strawberry",
  "tomatoe",
  "watermelon",
  "cherry",
  "chilly",
  "grape",
  "lemon",
  "oranges",
  "pineapple",
  "strawberry",
  "tomatoe",
  "watermelon",
];
let firstCard;
let secondCard;
let lockedBoard;
let winnerMessage = document.getElementById("winner");

// randomise the fruits using a function

function shuffle(fruits) {
  let currentIndex = fruits.length - 1;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    const randomIndex = Math.floor(Math.random() * currentIndex);

    // And swap it with the current element.
    [fruits[currentIndex], fruits[randomIndex]] = [
      fruits[randomIndex],
      fruits[currentIndex],
    ];
    currentIndex--;
  }

  return fruits;
}

console.log(shuffle(fruits));

// insert the card into the DOM by using javascript

for (const fruit of shuffle(fruits)) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-name", fruit);
  card.innerHTML = `'<div class="front"> <img class="front-image" src="./Images/${fruit}.png" /> </div>  <div class="back"></div>'`;
  document.querySelector(".grid-container").appendChild(card); //$ is to inject a varable into a string
  card.addEventListener("click", cardFlipper);
}

function cardFlipper() {
  if (lockedBoard) return;

  this.classList.add("flipped");
  //set first card to card when it doesnt exist & set second to card when first card exists
  if (firstCard === undefined) {
    firstCard = this;
  } else {
    secondCard = this;
    lockedBoard = true;
    if (firstCard.dataset.name === secondCard.dataset.name) {
      firstCard.removeEventListener("click", cardFlipper);
      secondCard.removeEventListener("click", cardFlipper);
      firstCard = undefined;
      secondCard = undefined;
      lockedBoard = false;
      youWon();
    } else {
      setTimeout(function () {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = undefined;
        secondCard = undefined;
        lockedBoard = false;
        youWon();
      }, 1000);
    }
  }
}

function youWon() {
  //if all cards flipped show winning message
  let allCards = document.querySelectorAll(".card");
  console.log(allCards);
  for (let i = 0; i < allCards.length; i++) {
    const indCard = allCards[i];
    console.log(indCard.classList);
    if (indCard.classList.contains("flipped")) {
      winnerMessage.textContent = "Congratulations you won!";
    }
  }
}

//after compairson if the cards are amatch disable them. if not then flip back over

// <div class="card">
//   <div class="front">
//     <img class="front-image" src="./Images/cherry.png" />
//   </div>
//   <div class="back"></div>
// </div>
// <div class="card">
//   <div class="front">
//     <img class="front-image" />
//   </div>
//   <div class="back"></div>
// </div>
