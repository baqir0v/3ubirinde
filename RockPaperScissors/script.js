let userChoice = prompt("Choose One").toLowerCase();
let pcChoice = Math.random();
let body = document.querySelector("body");
let p = document.createElement("p");

if (pcChoice <= 0.33) {
    pcChoice = "rock";
} else if (pcChoice <= 0.66) {
    pcChoice = "paper";
} else {
    pcChoice = "scissors";
}

let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "Tie";
    }
    if (choice1 === "rock") {
        if (choice2 === "paper") {
            return "Paper Wins";
        } else {
            return "Rock Wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper Wins";
        } else {
            return "Scissors Wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock Wins";
        } else {
            return "Scissors Wins";
        }
    }
}

let cavab = compare(userChoice, pcChoice);
p.textContent = cavab;

body.append(p);

console.log(p);
console.log("You are " + userChoice);
console.log("PC is " + pcChoice);
console.log(compare(userChoice, pcChoice));
