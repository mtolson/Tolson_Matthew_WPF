// Matthew Tolson
// 10/16/13
// Conditionals Wacky


var age = parseInt(prompt("What is your age?")); // ask you your age
var sex = prompt("Are you Male or Female?\n(m or f)"); // ask you your sex
var allowed; //setting the variable to be used if they are allowed in or not

allowed = ( sex === "f" && age >=18 || sex ==="m" && age >=21) ? "You can enter the Club!" : "Sorry, You are not allowed inside";// using ternary to deciede if the user is a female and 18 or older or if the user is a male and 21 or older, if one of the or statments are true then they are allowed is set to You can enter the Club, if false, then allowed is set to Sorry, you are not allowed inside.

console.log(allowed); //printing what is stored in allowed