const computerChoiceDisplay = document.getElementById("computer choice");
const userChoiceDisplay = document.getElementById("user choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

     generateComputerChoice();
     getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or can use possibleChoices.length
    // console.log(randomNumber);              // this step is used to see the result in console.

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissor";

    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "Its draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!";
    }
    if (computerChoice === "rock" && userChoice === "scissor") {
        result = "You lose!";
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You win!";
    }
    if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You win!";
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "You lose!";
    }

    resultDisplay.innerHTML = result
}  