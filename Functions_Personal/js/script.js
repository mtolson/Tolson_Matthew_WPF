// Matthew Tolson
// 10/23/13
// Functions Personal

var today = new Date()
var trip =  new Date("2014/05/13")

var daysTillTrip = function(today, trip){
  return Math.abs(today-trip)/(24*60*60*1000)
}

var days = daysTillTrip(today, trip)
console.log(days)