// Matthew Tolson
// 10/8/13
// Expression Worksheet


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

var grocery = [parseInt(prompt("What was your first week grocery bill?"))]; //Gathering the first weeks grocery bill
grocery[1] = parseInt(prompt("What was your second week grocery bill?"));//Gathering the second weeks grocery bill
grocery[2] = parseInt(prompt("What was your third week grocery bill?"));//Gathering the third weeks grocery bill
grocery[3] = parseInt(prompt("What was your fourth week grocery bill?"));//Gathering the fourth weeks grocery bill
grocery[4] = parseInt(prompt("What was your fifth week grocery bill?"));//Gathering the fifth weeks grocery bill

var groceryTotal = (grocery[0] + grocery[1]+grocery[2]+grocery[3]+grocery[4]);//adding all the grocery bills for a total
var groceryAvg = groceryTotal/5; //getting an average grocery bill
console.log("You have spent a total of $"+groceryTotal+ " on groceries ocer 5 weeks. That is an average of $" + groceryAvg+ " per week."); // printing the results


var item = prompt("Description of the Item"); // Gathering the item being purchased
var originalPrice =parseInt(prompt("What is the Original Price?")); // getting the original price of the item
var discount = parseInt(prompt("What is the discount?\n(ex: for 20% enter 20)")); // asking for the discount amount 
var salesTax = parseInt(prompt("What is the Sales Tax?\n(ex: for 6.75% enter 6.75)"));//asking for the sales tax amount

var itemNoTax = originalPrice - (originalPrice * (discount/100))// figuring out the cost of the item with out tax. ex: 100 -( 100*(20/100))=80
var itemTax = itemNoTax + (itemNoTax * (salesTax/100)) // figuring out the sales tax of the item after the discount has already been made

console.log("Your " + item + " was originally $"+originalPrice+", but after a " +discount+"% discount, it is now $"+ itemNoTax+" without tax, and $"+itemTax+" with tax."); //Printing the result of the differnt prices of the item purchased. 