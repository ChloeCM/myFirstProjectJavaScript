const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

console.log("Prices:");
console.log("Bubblegum: $2\nToffee: $0.2\nIce cream: $5\nMilk chocolate: $4\nDoughnut: $2.5\nPancake: $3.2");

let result = 202 + 118 + 2250 + 1680 + 1075 + 80;

console.log("Earned amount: " + result);
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");
console.log();
console.log("Income: " + result);

let staffExpenses = Number(input("Staff expenses: "));
let otherExpenses = Number(input("Other expenses: "));

let finalResult = result - staffExpenses - otherExpenses;

console.log("Net income: " + finalResult);



