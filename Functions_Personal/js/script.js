// Matthew Tolson
// 10/23/13
// Functions Personal

var today = new Date();
var trip =  new Date(prompt("When is your trip?\n(Format yyyy/mm/dd)"));

var daysTillTrip = function(today, trip){
  return Math.abs(today-trip)/(24*60*60*1000);
}

if (today< trip){
  var days = daysTillTrip(today, trip);
  console.log("You have "+days+" days until your trip");
}else {
  console.log("Your trip has already happened. I hope you had a good time");
}