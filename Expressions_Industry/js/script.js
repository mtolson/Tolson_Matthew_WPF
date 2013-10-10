// Matthew Tolson
// 10/10/13
// Expressions: Industry

var screenSize = parseInt(prompt("What is the width of the screen you are building for?\n(in pixels)")); // Gathering the screen size
var margin = parseInt(prompt("What is the margin you want in between the colums and the page edge?\n(in pixels)")); // Gathering the margin they want to use
var column = parseInt(prompt("How many colums do you want?")); // Finding out how many columns they would like to use

margin = (column+1)*margin; //adding 1 to the columns to get the correct number of marging spaces and then multiplying that by the margin to get the total margin space needed
var columnSize = (screenSize-margin)/column; // figuring out the columns size. taking the screen size then subtracting the total margin and then dividing that by the number of columns. 

console.log("With "+column+" columns and a screen size of " + screenSize+ " pixels and taking in account for the margin each column needs to be "+columnSize+" pixels wide."); // printing the results to the console. 