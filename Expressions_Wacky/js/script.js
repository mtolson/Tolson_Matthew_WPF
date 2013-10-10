// Matthew Tolson
// 10/09/13
// Expressions: Wacky

var item = [prompt("What is your first food item?")];
var calories = [parseInt(prompt("How many calories are in this item?"))];
var fat = [parseInt(prompt("How many calories are in this item?"))];

item[1] = prompt("What is your second food item?");
calories[1] = parseInt(prompt("How many calories are in this item?"));
fat[1] = parseInt(prompt("How many calories are in this item?"));

var totalCalories = calories[0]+calories[1]
var totalFat = fat[0]+fat[1]

console.log("In your "+item[0]+" and "+ item[1]+ "you are consuming "+totalCalories+ " calories and "+ totalFat+" grams of fat.")

totalCalories *= 2
totalFat *= 2
console.log("If you have 2 serving of each "+item[0]+" and "+ item[1]+ "you are consuming "+totalCalories+ " calories and "+ totalFat+" grams of fat.")
