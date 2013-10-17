// Matthew Tolson
// 10/16/13
// Conditionals Wacky



var casino = prompt("Do you like going to the Casino?\n(y or n)");//gathers if you like the casino or not
var extraCash = parseInt(prompt("How much extra cash do you have to spend?"));//ask how much money you have to spend
var game = prompt("Do you like Slots or Tables?\n(slot or table)");// ask your favorite type of game
var tablePlayMin = 600; // min amount of cash to play tables
var slotPlayMin = 200; // min amount of cash to play slots


if(casino === "y"){ // figures out if you like the casino or not
  if (game === "table" && extraCash >= tablePlayMin){ //if true the sees if you like tables and you have enough to play tables
    console.log("You have enough money to go play the Tables"); // if true prints out you can play
  }else if(game === "slot" && extraCash >= slotPlayMin){ //sees if you like slots and you have enough cash to play slots
    console.log("You have enough money to go play the Slots"); // if true prints our you can play slots
  }else if(game === "table" && extraCash >= slotPlayMin){ // looks and sees if your game is tables but only have cash for slots 
   console.log("Sorry, You don't have enough money for the tables, but you can play slots");// prints out your option that you can play slots 
  }else{
    console.log("Sorry, You need to save more money to go to the casino"); // if non are true then not enough cash to play tables or slots
  }
}else {
  console.log("I heard there are some good movies out, why not go see one?") // if they don't like going to the casino this prints out with advice to see a movie. 
}