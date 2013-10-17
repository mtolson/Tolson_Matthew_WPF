// Matthew Tolson
// 10/16/13
// Conditionals Wacky


var age = parseInt(prompt("What is your age?");
var sex = prompt("Are you Male or Female?\n(m or f)");
var allowed;

allowed = ( sex === "f" && age >=18 || sex ==="m" && age >=21) ? "You can enter the Club!" : "Sorry, You are not allowed inside";

