// Matthew Tolson
// 10/16/13
// Conditionals Worksheet


//var mpg = parseInt(prompt("What is your car's MPG?")); // Ask for the MPG your car gets
//var gauge = parseInt(prompt("What percent of gas is left in your tank?")); // Ask for the the percent of gas left in your car
//var tank = parseInt(prompt("How big is your gas tank?")); // Ask how big your tank is
//var miles = 200 // Sets how many miles you have to drive before the next gas station
//var gasLeft = tank * (gauge/100)// divides the size of the tank by the percent of gas left in your tank to get how many gallons are left
//
//if(gasLeft * mpg > miles){ //determins if the amount of gas left in the tank * mpg is greater than the miles needed to be driven
//  console.log("Yes, you can make it without stopping for gas!"); //If tru this prints
//}else{
//  console.log("You only have "+ gasLeft+" gallons of gas in your tank, better get gas now while you can!");//if false then this prints
//}


//var username = prompt("Please enter the correct Username:"); //Ask for the Username
//var password = prompt("Please enter the correct Password:"); //Ask for the Password
//var cUsername = "Tolson"; // Set the correct Username
//var cPassword = "FullSail"; // Set the correct Password
//
//if(username === cUsername && password === cPassword){// determine if the username and password are the correct username and password
//  console.log("Welcome, "+cUsername+"!"); // if both statments are true then this prints.
//}else if(username === cUsername){ // if one of the statments above is false then see if the username is correct
//  console.log("Password does not match our records."); //if both usernames are correct then print that the passwords are incorrect
//}else{ 
//  console.log("User not found. Try again.");//if the usernames are not equal then print this
//}

var time = prompt("What time are you going to see the movie?\n(0-24)");
var age = prompt("What is your age?");
var ticketPrice = 12
var discountAge = 55
var discountCost = 7



if (age >= discountAge){
  ticketPrice = discountCost
}
console.log(ticketPrice)