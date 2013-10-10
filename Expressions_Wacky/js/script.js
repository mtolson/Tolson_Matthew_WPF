// Matthew Tolson
// 10/09/13
// Expressions: Wacky

var numCigs = parseInt(prompt("How many cigarettes do you smoke in one day?\n(in the number of cigretts not packs)" ));
var cost = parseInt(prompt("How much does one pack of cigarettes cost?"));
var ecigCost = parseInt(prompt("How much does an Ecig cost\n(One time Cost for the equipment)?"));
var eJuiceCost = parseInt(prompt("How much does the oil cost month?"));

var cigCost = cost/20;
var costMonth = cigCost*numCigs*30;
var costYear =  costDay*365;
var eJuiceYear = eJuice*12;
var ecigTotalCost = eJuiceYear+ecigCost;
var ecigAvgMonthCost = ecigTotalCost/12;

console.log("You spend $"+costDay+" per month in cigarettes and $"+costYear+" per year.");
console.log("Your average monthly cost for and Ecig is $"+ecigAvgMonthCost+" and yearly cost is $"+ecigTotalCost+".");



console.log(cigCost);
console.log(costDay);
