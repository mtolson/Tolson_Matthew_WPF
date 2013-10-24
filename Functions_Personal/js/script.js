// Matthew Tolson
// 10/23/13
// Functions Personal

var today = new Date();//setting the variable for today's date
var trip =  new Date(prompt("When is your trip?\n(Format yyyy/mm/dd)"));//asking for the date of your trip

var daysTillTrip = function(today, trip){ //annoymous function, setting the function name and the parameters
  return Math.abs(today-trip)/(24*60*60*1000); //returning the formula to the var that called the function. the date subtraction does everything in milliseconds so i had to convert it into days 
}

if (today< trip){
  var days = daysTillTrip(today, trip);
  if (days > 30){
    console.log("You have "+days+" days until your trip, are you getting excited? Have you started planning what you will see and do?");
  }else if (days > 14){
    console.log("You have "+days+" days until your trip, You should start your laundry and start packing. Less than two weeks you will be leaving.");
  }else if (days > 7){
    console.log("You have "+days+" days until your trip, you should finish packing. Are you excited yet?");
  }else if (days > 0){
    console.log("You have "+days+" days until your trip, are you packed. Did you remember everything, socks, underwear, toothbruch, passport? You don't want to leave any thing at home.");
  }else {
    console.log("You are leaving on your Trip today! Have fun!");
  }
}else {
  console.log("Your trip has already happened. I hope you had a good time");
}