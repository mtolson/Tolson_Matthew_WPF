// Matthew Tolson
// 10/09/13
// Expressions: Wacky

var item = [prompt("What is your first food item?")]; //Gathering the first food item name
var calories = [parseInt(prompt("How many calories are in this item?"))]; //Asking the number of Calories in the item
var fat = [parseInt(prompt("How many grams of fat is in this item?"))];//Getting the amount of Fat in the item

item[1] = prompt("What is your second food item?");//Gathering the second food item name
calories[1] = parseInt(prompt("How many calories are in this item?"));//Asking the number of Calories in the item
fat[1] = parseInt(prompt("How many grams of fat is in this item?"));//Getting the amount of Fat in the item

var totalCalories = calories[0]+calories[1];//Adding all the Calories to get a total
var totalFat = fat[0]+fat[1];//adding all grams of fat to get a total fat count

console.log("In your "+item[0]+" and "+ item[1]+ " you are consuming "+totalCalories+ " calories and "+ totalFat+" grams of fat."); //printing the total amount of calories and grams of fat in both items

totalCalories *= 2; // calculating if there was 2 servings of the items
totalFat *= 2; // calculating if there was 2 servings of the items
console.log("If you have 2 serving of each "+item[0]+" and "+ item[1]+ " you are consuming "+totalCalories+ " calories and "+ totalFat+" grams of fat."); //Printing to the console the results if they had two servings of the food. 
