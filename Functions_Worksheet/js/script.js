// Matthew Tolson
// 10/23/13
// Functions Worksheet

var radius = 4; //Setting the radius value
var pi = 3.14; // Setting the value for pi, also knowing that this is a number that does not change I set it so I can easily call it again in the future.

//Using annoymous funtion. Setting the function name and calling the parameters r & p which relate to what was passed in the argument.
var calculateCircumference = function(r, p){
  return 2*r*p; // returning the value of the formula to the call.
}
var circumference = calculateCircumference(radius, pi); //Setting the var circumference to receive what the function returns. Also calling the function and passing the arguments radius and pi var, which are set earlier
console.log("The circumfernce of the circle is " + circumference)// Printing the results of what is stored in the var circumference which is what was returned from the function call.


var weight = 200; // Setting the var weight

function calculateBeeStings(w){ //using a normal function, setting the name of the function so it can be called later. Setting the parameters that need to be passed. 
  return w*8.666666667; //returning the results of the formula.
}

var numBeeStings = calculateBeeStings(weight);//Calling the function and storing the results in numBeeStings. Also passing the argument of weight which was set earlier.

console.log("It takes " + numBeeStings+" bee stings to kill this animal.")//Printing the results of the function call numBeeStings.