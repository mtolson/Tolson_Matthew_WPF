// Matthew Tolson
// 10/16/13
// Conditionals Wacky



var casino = prompt("Do you like going to the Casino?\n(y or n)");
var extraCash = parseInt(prompt("How much extra cash do you have to spend?"));
var game = prompt("Do you like Slots or Tables?\n(slot or table)");
var tablePlayMin = 600
var slotPlayMin = 200


if(casino = "y"){
  if (game === "table" && extraCash >= tablePlayMin){ 
    console.log("You have enough money to go play the Tables");
  }else if(game === "slot" && extraCash >= slotPlayMin){
    console.log("You have enough money to go play the Slots");
  }else if(game === "table" && extraCash >= slotPlayMin){
   console.log("Sorry, You don't have enough money for the tables, but you can play slots");
  }else{
    console.log("Sorry, You need to save more money to go to the casino");
  }
}else {
  console.log("I heard there are some good movies out, why not go see one?")
}