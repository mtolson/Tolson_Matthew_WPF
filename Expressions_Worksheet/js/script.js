// Matthew Tolson
// 10/8/13
// Expression Worksheet

//var dogHumanYears = 20;
//var dogYears = 7;
//var dogAge = dogHumanYears * dogYears;
//console.log(dogAge);

var dogAge = [7]; //setting the array dogAge with 7 years 
dogAge[1] = prompt("How old is your dog in Human Years?"); //adding human years to the dogAge array
dogAge[2] = dogAge[0] * dogAge[1]; //finding out the dogs age in dog years and adding it to the array
console.log("Sparky is " + dogAge[1] + " human years old which is " + dogAge[2] + " in dog years."); // Printing the results to the console log

var slicePerPizza = prompt("How many slices per pizza?"); //setting the var of slices per pizza
var numPeople = prompt("How many people are at the Party?"); //setting the var of people at the party
var numPizza = prompt("How many many pizzas did you order?");//setting the var of pizzas

var slicePerPerson = numPizza * slicePerPizza / numPeople; //figuring out the number of slices per person. Number of pizzas * Number of slices divided by Number of people
console.log("Each perosn ate " + slicePerPerson + " slices of pizza at the party."); // Printing the results to the console log

console.log("Sparky got " + ((numPizza * slicePerPizza)-((~~(numPizza * slicePerPizza / numPeople))*numPeople))+ " slices of pizza"); // Printing the results to the console log