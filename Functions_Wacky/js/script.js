// Matthew Tolson
// 10/24/13
// Functions Wacky

var wallHeight1 = parseInt(prompt("What is the height of the first wall?"));//finds out the wall's height
var wallWidth1 = parseInt(prompt("What is the width of the first wall?"));//finds out the wall's width

var wallHeight2 = parseInt(prompt("What is the height of the second wall?"));//finds out the next wall's height
var wallWidth2 = parseInt(prompt("What is the width of the second wall?"));//finds out the next wall's width

var wallHeight3 = parseInt(prompt("What is the height of the third wall?"));//finds out the next wall's height
var wallWidth3 = parseInt(prompt("What is the width of the third wall?"));//finds out the next wall's width

var wallHeight4 = parseInt(prompt("What is the height of the fourth wall?"));//finds out the next wall's height
var wallWidth4 = parseInt(prompt("What is the width of the fourth wall?"));//finds out the next wall's width

//Function to calculate the rooms area
function calcRoomArea(h1,h2,h3,h4,w1,w2,w3,w4){ //sets the functions name and sets the parameters
  var roomArea = (h1*w1)+(h2*w2)+(h3*w3)+(h4*w4); //calculates each walls square footage and then adds them together
  return roomArea; //returns the entire rooms walls square footage
}
//looks to see if any variable given was zero, if it is true then prints to the console that no values can be zero
if (wallHeight1 === 0 || wallHeight2 === 0 || wallHeight3 === 0 || wallHeight4 === 0 || wallWidth1 === 0 || wallWidth2 === 0 ||wallWidth3 === 0 || wallWidth4 === 0){
  console.log("Values can not be zero");
}else{ //if false then it calls the function and passes the arguments and prints to the console the results.
  var roomArea = calcRoomArea (wallHeight1, wallHeight2, wallHeight3, wallHeight4, wallWidth1, wallWidth2, wallWidth3, wallWidth4)
  console.log("You need "+roomArea+" square feet of paint.");
}