const body = document.querySelector("body")
const hex = document.querySelector("#hex")

const tokens = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function getRandomNumber() {
    return Math.floor(Math.random() * tokens.length);
  }

function hexCreator() {
    let temp = "#"
    for (let i = 0; i < 6; i++) {
        temp = temp + tokens[getRandomNumber()]
    }
    return temp
}

document.getElementById("button").addEventListener("click", function(){
    const newColor = hexCreator();
    body.style.backgroundColor = newColor;
    hex.textContent = newColor;
})
