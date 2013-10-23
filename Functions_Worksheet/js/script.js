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