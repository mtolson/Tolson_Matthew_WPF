// Matthew Tolson
// 10/23/13
// Functions Worksheet

var radius = 4;
var pi = 3.14;

var calculateCircumference = function(r, p){
  return 2*r*p;
}
var circumference = calculateCircumference(radius, pi);
console.log("The circumfernce of the circle is " + circumference)


var weight = 200;

function calculateBeeStings(w){
  return w*8.666666667;
}

var numBeeStings = calculateBeeStings(weight);

console.log("It takes " + numBeeStings+" bee stings to kill this animal.")