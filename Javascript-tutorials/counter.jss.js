
let value = 0

const number = document.querySelector("#number")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

// function increaseValue() {
//     value++
//     console.log(value)
//     number.textContent = value
// } 

// function decreaseValue() {
//     value--
//     number.textContent = value
// } 

// function resetValue() {
//     value = 0
//     number.textContent = value
// } 


function updateValue(operation) {
    if (operation === "increase") {
        value++
    }
    else if (operation === "decrease") {
        value--
    } else {
        value = 0
    }
    number.textContent = value
}


function colorChanger(numberValue){
    if(numberValue > 0) number.style.color = "green"
    else if(numberValue < 0) number.style.color = "red"
    else number.style.color = "black" 
}

increase.addEventListener("click", function() {
    updateValue("increase")
    colorChanger(value)
}
)

decrease.addEventListener("click", function() {
    updateValue("decrease")
    colorChanger(value)
}
)

reset.addEventListener("click", function(){
    updateValue("reset")
    number.style.color = "black"
}
)

