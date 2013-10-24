// Matthew Tolson
// 10/24/13
// Functions Wacky

var wallHeight1 = parseInt(prompt("What is the height of the first wall?"));
var wallWidth1 = parseInt(prompt("What is the width of the first wall?"));

var wallHeight2 = parseInt(prompt("What is the height of the second wall?"));
var wallWidth2 = parseInt(prompt("What is the width of the second wall?"));

var wallHeight3 = parseInt(prompt("What is the height of the third wall?"));
var wallWidth3 = parseInt(prompt("What is the width of the third wall?"));

var wallHeight4 = parseInt(prompt("What is the height of the fourth wall?"));
var wallWidth4 = parseInt(prompt("What is the width of the fourth wall?"));

function calcRoomArea(h1,h2,h3,h4,w1,w2,w3,w4){
  var roomArea = (h1*w1)+(h2*w2)+(h3*w3)+(h4*w4);
  return roomArea;
}

if (wallHeight1 === 0 || wallHeight2 === 0 || wallHeight3 === 0 || wallHeight4 === 0 || wallWidth1 === 0 || wallWidth2 === 0 ||wallWidth3 === 0 || wallWidth4 === 0){
  console.log("Values can not be zero");
}else{
  var roomArea = calcRoomArea (wallHeight1, wallHeight2, wallHeight3, wallHeight4, wallWidth1, wallWidth2, wallWidth3, wallWidth4)
  console.log("You need "+roomArea+" square feet of paint.");
}