// console.log("the best pet site")

// // 1 - numbers! can do maths etc with it. + & -. Can also do Power. 
// "String" / "dogs are coool" 
// true / false
// null
// undefined

// const num = 1;
// console.log(num)

// let num2 = 2
// num2++ 
// console.log(num2)

// console.log(num2 > num)
// console.log(num2 < num)
// console.log(num2 <= num)
// console.log(num2 >= num)
// console.log(num2 === num)

// const str = "3"

// console.log(num2===str)
// console.log(num2 ==str)

// const firstName = "David"
// const lastName = "Smith" 

// console.log(firstName + " " + lastName)
// console.log(`${firstName} ${lastName}`)


// const height = 1.75
// const mass = 95

// console.log(mass / height ** 2)

// console.log(Boolean(str)) 
// console.log(Boolean(num2))

// console.log(Boolean (false))
// console.log(Boolean (0))
// console.log(Boolean (""))
// console.log(Boolean (null))
// console.log(Boolean (undefined))
// console.log(Boolean (NaN))


// console.log("2" + 3)
// console.log("2" - 3)


// const evenNum = 6
// const oddNum = 3

// if (evenNum % 2 === 0) {
//     console.log(`${evenNum} is even`)
//     console.log("!!!!!!!!")
// } else if (evenNum === 5) {
//     console.log("this number is a five!")
// } 
// else {
//     console.log("This number is NOT even")
// }

// console.log(evenNum % 2)
// console.log(evenNum % 3)




// const haleyHeight = 1.66
// const haleyMass = 65
// const alexHeight = 1.85
// const alexMass = 80

// // Arrrow Function 

// const calculateBMi3 = (height,mass) => {
//     return mass/height**2
// }


// console.log("Haley's BMi " + calculateBMi3(haleyHeight,haleyMass).toFixed(2) + " is higher than Alex's " + calculateBMi3(alexHeight,alexMass).toFixed(2) )


// // // function decleration
// function calculateBMi(height,mass){
//     return mass/height**2
// }

// // Function Expression
// const calculateBMi2 = function (height,mass){
//     return mass/height**2
// }


// function ageCalc(birthYear,currentYear){
//     return currentYear - birthYear
// }

// const domsyear = 1995
// const yearnow = 2023

// console.log("doms age is: " + ageCalc(domsyear,yearnow))

// // Question 2 - if else statements (ternary operator)

// const team1 = (95+120+111)/3
// const team2 = (89+98+100)/3
// const winner = team1 > team2 ? "Team one wins!":"Team two wins!"

// console.log(winner)


// if(team1 > team2 && team1 > 100) {
//     console.log("Team 1 is the winner") 
// } else if (team2 > team1 && team2 > 100) {
//     console.log("team 2 is the winner!!!")
// } else if (team1 === team2 && team1 > 100) {console.log("the result is a draw!")} 
// else {console.log("no one wins!")}


// console.log("Team one's average score is: " + team1.toFixed(2) + ". Team two's average score is: "
//  + team2.toFixed(2) )


// const booksReadPerYear = prompt('How many books do you read per year?');


// if (booksReadPerYear == 1) {
//     console.log("i read one book per year.")
//   } else if (booksReadPerYear > 1) {
//     console.log("i read a lot.")
//   } else {
//     console.log("i don't read.")
//   }

//   if (booksReadPerYear === 1) {
//     console.log("i read one book per year.")
//   } else if (booksReadPerYear > 1) {
//     console.log("i read a lot.")
//   } else {
//     console.log("i don't read.")
//   }


// const dice = 2
// switch(dice){
//     case 1: 
//         console.log(1) 
//         break
//     case 2: 
//     case 3: 
//         console.log(2)
//         console.log(3)
//         break
//     case 4:
//         console.log(4)
//         break
//     case 5: 
//         console.log(5)
//         break
//     case 6:
//         console.log(6)
//         break
// }


// const DOW = "monday" 

// switch(DOW){
//     case "monday":
//         console.log("Not againnn :( ")
//         break
//     case "tuesday":
//     case "wednesday":
//         console.log("Let's do this")
//         break
//     case "thursday":
//         console.log("almost there ")
//         break
//     case "thursday":
//         console.log("almost there ")
//         break
//     case "friday":
//         console.log("fianllylylyly ")
//         break
//     case "saturday":
//         console.log("ayyayaya ")
//         break
//     case "sunday":
//         console.log("its sunday already? ")
//         break
//     default: 
//         console.log("invalid input")
// }

const fooBar = (n) => {
   if(n%3 === 0 && n%5 === 0)
        return "fooBar"
    else if( n%3 === 0 )
        return "foo"
    else if(n%5 === 0)
        return "bar"
    else
        return n
}

const n = 25



const a = fooBar(3)
console.log(a)
console.log(fooBar(5))
console.log(fooBar(15))
console.log(fooBar(2))


// const haleyHeight = 1.66
// const haleyMass = 65
// const alexHeight = 1.85
// const alexMass = 80

// // Arrrow Function 

// const calculateBMi3 = (height,mass) => {
//     return mass/height**2
// }


// console.log("Haley's BMi " + calculateBMi3(haleyHeight,haleyMass).toFixed(2) + " is higher than Alex's " + calculateBMi3(alexHeight,alexMass).toFixed(2) )


// // // function decleration
// function calculateBMi(height,mass){
//     return mass/height**2
// }

// // Function Expression
// const calculateBMi2 = function (height,mass){
//     return mass/height**2
// }


const friends = ["jon", "steve", "dave", "greg", "mark" ]

console.log(friends[3])
friends[4] = "phil" 
console.log(friends)

friends.length
console.log( friends[friends.length - 1])

friends.push("mike")
console.log(friends)


const ARR = ["Pikachu", 45, ["john", "michael"]]
console.log(ARR[2][1])

const variablename = ARR.pop() 

const newvariable = ARR.shift() 

ARR.unshift("charmander") 

ARR.includes(45)


const john = {
    firstName: "John",
    secondName: "Smith",
    birthYear: 1964,
    ageCalc: function(yearNow){
        return yearNow - this.birthYear
    } 
}

console.log(john.firstName + john.secondName + "'s current age is " + john.ageCalc(2023))

john["firstName"]
john.firstName

const nameType = "secondName" 

john[nameType]

const shirley = {
    firstName: "Shirley",
    secondName: "Henry",
    height: 1.5,
    mass: 75,
    calculateBMi: function(){
        return this.mass/this.height**2
}}


console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

for(let i=10; i>=0; i=i-2){
    console.log(i)
}


const TopNum = [[1, 2, 3, 3, 5, 9], [4, 5, 6], [7, 8, 9]]


const calcTopNum = (inputNum) => {
    let sum = 0;
    for(let i=0; i<=inputNum.length-1; i=i+1){
       sum = sum + inputNum[i] 
    }
    return sum
} 

calcTopNum(TopNum[0])

const average = (inputNum) => {
    let sum = 0;
    for(let i=0; i<=inputNum.length-1; i=i+1){
       sum = sum + inputNum[i] 
    }
    return sum / inputNum.length
} 



const calcDouble = (inputArray) => {
    let doubleArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        // doubleArray.push(inputArray[i]*2);
        doubleArray[i] = inputArray[i]*2
      }
      return doubleArray;
  }
  

const CalcSmallNum = function (inputArray){
    let smallNum = Number.POSiTiVE_iNFiNiTY
    for (let i = 0; i < inputArray.length; i++) {
       if (inputArray[i]<smallNum) smallNum = inputArray[i]
    }
    return smallNum;
} 



const array = [18, 5, 9, 17, 10, 100]

// for (let i = 0; i < array.length; i++) {
    
    
// }

for (const num of array){
    console.log(num)
}

const prices = [72, 34, 130, 84, 53] 

const calcPrice = function(inputPrices){
    let fivePercent = []
    for(const num of inputPrices){
        fivePercent.push(num*0.05)
    }
    return fivePercent
}


console.log(
    calcPrice(prices)
)


let index = 0
while(index<10){
    console.log(index)
    index++
}


const calcEven = function(inputArray){
    let evenNum = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 === 0) 
        evenNum.push(inputArray[i]);        
    }
    return evenNum.sort(
        function(a, b){
            return a-b
        }
    );
}

const calcFib = function(num){
    if (num<1) {
        throw new Error("Input should be 1 or higher")
    }
    if (num === 1) return 0
    if (num === 2) return 1

    let fibNum0ne = 0
    let fibNumTwo = 1
    for (let i = 2; i < num; i++) {
        const temp = fibNum0ne
        fibNum0ne = fibNumTwo
        fibNumTwo = (temp + fibNumTwo) 
    }
    return fibNumTwo
}

// console.log(calcFib(-1))


// const target = 2
// const arr = [34, 78, 10, 20]

// const findElement = (arr, target) => {
//     let temp = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (target === arr[i]) 
//         temp = true
//     }
//     return temp
//   }

//   const findElement2 = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (target === arr[i]) 
//         return true
//     }
//     return false
//   }
  

//   console.log(arr.includes(target))


// console.log(findElement(arr, target))


const digit = "6"

const multiplyX = function (input){
    let output = 0
    for (let i = 0; i < 4; i++) {
        output += Number(input.repeat(i+1))
    }
        return output    
}


console.log(multiplyX(digit))

  // // Function Expression
// const calculateBMi2 = function (height,mass){
//     return mass/height**2
// }

// // Arrrow Function 

// const calculateBMi3 = (height,mass) => {
//     return mass/height**2
// }