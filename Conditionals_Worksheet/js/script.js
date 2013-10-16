// Matthew Tolson
// 10/16/13
// Conditionals Worksheet


var mpg = parseInt(prompt("What is your car's MPG?"));
var gauge = parseInt(prompt("What percent of gas is left in your tank?"));
var tank = parseInt(prompt("How big is your gas tank?"));
var miles = 200
var gasLeft = tank * (gauge/100)

if(gasLeft * mpg > miles){
  console.log("Yes, you can make it without stopping for gas!");
}else{
  console.log("You only have "+ gasLeft+" gallons of gas in your tank, better get gas now while you can!");
}
