// Matthew Tolson
// 10/16/13
// Conditionals Worksheet


var mpg = parseInt(prompt("What is your car's MPG?")); // Ask for the MPG your car gets
var gauge = parseInt(prompt("What percent of gas is left in your tank?")); // Ask for the the percent of gas left in your car
var tank = parseInt(prompt("How big is your gas tank?")); // Ask how big your tank is
var miles = 200 // Sets how many miles you have to drive before the next gas station
var gasLeft = tank * (gauge/100)// divides the size of the tank by the percent of gas left in your tank to get how many gallons are left

if(gasLeft * mpg > miles){ //determins if the amount of gas left in the tank * mpg is greater than the miles needed to be driven
  console.log("Yes, you can make it without stopping for gas!"); //If tru this prints
}else{
  console.log("You only have "+ gasLeft+" gallons of gas in your tank, better get gas now while you can!");//if false then this prints
}
