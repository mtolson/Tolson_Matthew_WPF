// Matthew Tolson
// 10/09/13
// Expressions- Personal

var numCigs = parseInt(prompt("How many cigarettes do you smoke in one day?\n(in the number of cigretts not packs)" )); // Get the number of cigs you smoke in one day
var cost = parseInt(prompt("How much does one pack of cigarettes cost?")); // Getting the cost of a pack of cigs.
var ecigCost = parseInt(prompt("How much does an Ecig cost\n(One time Cost for the equipment)?")); // Getting the cost of an Ecig
var eJuiceCost = parseInt(prompt("How much does the oil cost month?")); //Getting the monthly cost of the oil for the Ecig

var cigCost = cost/20; // Calculating the cost each cig
var costMonth = cigCost*numCigs*30;// Calculating the monthly cost of cigs
var costYear =  costMonth*12; // calculating the yearly cost of cigs
eJuiceCost *= 12; // calculating the yearly cost of the juice for the ecig
var ecigTotalCost = eJuiceCost+ecigCost; // Calculating the total yearly cost for an ecig
var ecigAvgMonthCost = ecigTotalCost/12; // Calculating the average monthly cost of an ecig
var ecigSaveMonth = costMonth-ecigAvgMonthCost // calculating the monthly savings
var ecigSaveYear = costYear-ecigTotalCost // calculating the yearly savings

console.log("You spend $"+costMonth+" per month in cigarettes and $"+costYear+" per year."); // printing to the console the cost of cigs
console.log("Your average monthly cost for and Ecig is $"+ecigAvgMonthCost+" and yearly cost is $"+ecigTotalCost+"."); // printing to the console the cost of ecigs
console.log("You can save $"+ ecigSaveMonth +" a month and $"+ecigSaveYear+" a year by switching to an ecig"); // printing to the console the savings of ecigs
