// let numbers = [10,20,30,40,50];

// let counter = 0
// while(numbers.length > counter){
//     console.log(numbers[counter])
//     counter++
// }

// function hi(){
//     let hello = "hello"
//     console.log(hello)  
// }
// hi()

// function addTwo(num){ 
//     console.log(num+2)
// }
// addTwo(5)



// let harris = {
//     loggedIn: true, 
//     favoriteColor: "purple",
//     favoriteBaby: "robbie"
// }

// function loggedIn(user){
//     if(user){
//         console.log("You are logged in")
//     } else{
//         console.log("You are not logged in")
//     }
// }

// loggedIn()

// let number = document.getElementById("number")

// let plus = document.getElementById("plus")
// let minus = document.getElementById("minus")

// plus.addEventListener("click", () => {
//     addChecker()
// })

// minus.addEventListener("click", () => {
//     if(number.innerText > 0){
//         number.innerText--
//     }
// })

// function addChecker(){
//     if(number.innerText <= 5){
//         number.innerText++
//     }
// }
// challenge: 

// function evenOdd(num){
//     if(num % 2 == 0){
//         console.log("you chose an even number")
//     }else{
//         console.log("You chose an odd number")
//     }
// }
// evenOdd(9)


// let textBox = document.getElementById("textBox")

// let answer = document.getElementById("answer")

// let submit = document.getElementById("submitButton")
// submit.addEventListener("click", () => {
//     answer.innerText = textBox.value
// })


// let bankAccount = 500;

// if(bankAccount >= 500){
//     console.log("You have sufficient funds")
// }else(bankAccount <= 500){
//     console.log("Account balance is low")
// }

// while(bankAccount < 500){
//     console.log("Would you like to make a deposit?")
// }


// let countdown = 10

// while(countdown > 0){
//     console.log(countdown)
//     countdown--
// }

// function addorMultiply(num){
//     if(num > 10){
//         console.log(num * 2)
//     }else{
//         console.log(num + 2)
//     }
// }
// addorMultiply(11)

// let spinCount = 20;
// let earthSpinning = "The Earth is spinning"

// // while(spinCount >= 0){
// //     console.log(spinCount)
// //     console.log(earthSpinning)
// //     spinCount--

// //     if(spinCount <= 0){
// //         console.log("The Earth is no longer spinning")
// //     }
// // }


// let header = document.getElementById("header")

// let minusButton = document.getElementById("minusButton")
// minusButton.addEventListener("click", () => {

// })
// let plusButton = document.getElementById("plusButton")
// plusButton.addEventListener("click", () => {

// })

// let answer = document.getElementById("answer")

// while(spinCount >= 0){

//     if(spinCount <= 0){
//         console.log(spinCount)
//         console.log(answer.innerText = "The Earth is no longer spinning")
//     } else {
//         console.log(spinCount)
//         console.log(answer.innertext = earthSpinning)
//     }
//     spinCount--
// }

//  console.log(Boolean(0));

//  let money = 0;

//  if(money){
//      console.log("Don't spend it all");
//  }else{
//      console.log("You should get a job");
//  }

//  let height;
//  if(height){
//      console.log("height is defined");
//  }else{
//      console.log("height is undefined");
//  }


// let dinnerOptions = {

//     japanese: ["ramen", "sushi", "taiyaki"],
//     korean: ["bulgogi","gimbap","japchae"],
//     italian: ["pasta","mussels", "wine"]
    
// } 
// console.log(dinnerOptions.japanese)


// let answer = document.getElementById("input")
// let choice = document.getElementById("choice")

// let submit = document.getElementById("submit")
// submit.addEventListener("click", () => {
//     choice.innerText = answer.value
// })


// const age = 18;
// if(age === 18){
//     console.log("You just became an adult")
// }

// let love = prompt("Do you love me?");
// console.log(love);
// console.log(typeof love);

// if(love.toLowerCase() === "yes"){
//     console.log("Yay!!")
// } else{
//     console.log("FML")
// }

// if(love.toLowerCase !== "yes"){
//     prompt("Why?")
// }

// let hasLicense = true;
// let goodVision = true;
// let tired = true;



// if(hasLicense && goodVision && !tired){
//     console.log("You are able to drive")
// } else{
//     console.log("Someone else should drive")
// }


// let dolphinsAverage = (96+108+89) / (3)
// console.log(dolphinsAverage)

// let koalasAverage = (88+91+110) / (3)
// console.log(koalasAverage)

// let minScore = 100;

// if(dolphinsAverage > koalasAverage && dolphinsAverage >= minScore){
//     console.log("The Dolphins have a higher average")
// } else if(koalasAverage > dolphinsAverage && koalasAverage >= minScore){
//     console.log("The Koalas have a higher average")
// } else if(dolphinsAverage === koalasAverage || dolphinsAverage >= minScore && koalasAverage >= minScore{
//     console.log("There is a draw")
// }

// let day = "wednesday";

// switch(day){
//     case "monday":
//         console.log("plan course structure");
//         console.log("go to coding meetup"); 
//         break;
//     case "tuesday":
//         console.log("prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("write code examples");
//         break;
//     case "friday":
//         console.log("record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("enjoy the weekend");
//     break;
//     default:
//         console.log("not a valid day");
// }

// let monday = "monday";
// let tuesday = "tuesday";
// let wednesday = "wednesday";
// let thurday = "thursday";
// let friday = "friday";
// let saturday = "saturday";
// let sunday = "sunday";

// let day = "saturday"

// if(day === "monday"){
//     console.log("plan course structure");
//     console.log("go to coding meetup"); 
// }else if(day === "tuesday"){
//     console.log("prepare theory videos");
// }else if(day === "wednesday" || day === "thursday"){
//     console.log("write code examples");
// }else if(day === "friday"){
//     console.log("record videos");
// }else if(day === "saturday" || day === "sunday"){
//     console.log("enjoy the weekend");
// }else{
//     console.log("not a valid day");
// }

// console.log(`I'm ${2021-2000} years old`)

let age = 21;
// age >= 18 ? console.log("i like to drink wine 🍷") : console.log("i like to drink water 💧");

let drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let color = "blue";

let favColor = color === "purple" ? "my favorite color is purple 💜" : "this is not my favorite color 😡";
console.log(favColor)

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`)