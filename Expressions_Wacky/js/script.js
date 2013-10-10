// Matthew Tolson
// 10/09/13
// Expressions: Wacky

var numCigs = parseInt(prompt("How many cigarettes do you smoke in one day?\n(in the number of cigretts not packs)" ));
var cost = parseInt(prompt("How much does one pack of cigarettes cost?"));

var cigCost = cost/20
var costDay = cigCost*numCigs

console.log("You spend $"+costDay+" per day in cigarettes and $"+costDay*365+" per year.")

console.log(cigCost)
console.log(costDay)
