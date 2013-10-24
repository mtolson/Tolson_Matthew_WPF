// Matthew Tolson
// 10/23/13
// Functions Personal

var today = new Date();//setting the variable for today's date
var trip =  new Date(prompt("When is your trip?\n(Format yyyy/mm/dd)"));//asking for the date of your trip

var daysTillTrip = function(today, trip){ //annoymous function, setting the function name and the parameters
  return Math.abs(today-trip)/(24*60*60*1000); //returning the formula to the var that called the function. the date subtraction does everything in milliseconds so i had to convert it into days 
}

if (today<= trip){ // looks to see if today's date is less than the trips date if true goes to the next line of code, if not true then to the else statement
  var days = daysTillTrip(today, trip);//calls the function daysTillTrip and sets the results to days. Passes the arguments today and trip to the function.
  if (days > 30){//looks at the results and sees if the results are greater than 30, if true next statments happens, if false then the next else statement
    console.log("You have "+days+" days until your trip, are you getting excited? Have you started planning what you will see and do?");//prints to the console  if the statement above is true
  }else if (days > 14){//looks at the results and sees if the results are greater than 30, if true next statments happens, if false then the next else statement
    console.log("You have "+days+" days until your trip, You should start your laundry and start packing. Less than two weeks you will be leaving.");//prints to the console  if the statement above is true
  }else if (days > 7){//looks at the results and sees if the results are greater than 30, if true next statments happens, if false then the next else statement
    console.log("You have "+days+" days until your trip, you should finish packing. Are you excited yet?");//prints to the console  if the statement above is true
  }else if (days > 0){//looks at the results and sees if the results are greater than 30, if true next statments happens, if false then the next else statement
    console.log("You have "+days+" days until your trip, are you packed. Did you remember everything, socks, underwear, toothbruch, passport? You don't want to leave any thing at home.");//prints to the console  if the statement above is true
  }else {// if all other statements are false then your trip is happening today. 
    console.log("You are leaving on your Trip today! Have fun!"); //prints to the console 
  }
}else {//If the first if statement was false then this happens
  console.log("Your trip has already happened. I hope you had a good time");//prints to the console
}