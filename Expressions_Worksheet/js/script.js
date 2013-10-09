// Matthew Tolson
// 10/8/13
// Expression Worksheet

//var dogHumanYears = 20;
//var dogYears = 7;
//var dogAge = dogHumanYears * dogYears;
//console.log(dogAge);

var dogAge = [7];
dogAge[1] = prompt("How old is your dog in Human Years?");
dogAge[2] = dogAge[0] * dogAge[1];
console.log("Sparky is " + dogAge[1] + " human years old which is " + dogAge[2] + " in dog years.");
alert("Sparky is " + dogAge[1] + " human years old which is " + dogAge[2] + " in dog years.");