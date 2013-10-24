// Matthew Tolson
// 10/24/13
// Functions Industry

var invoiceTotal = parseInt(prompt("What is the Order Total?"));//Gets infomation on the total cost of the order
var invoiceDate = new Date(prompt("What is the Date the Order was signed?\n (format yyyy/mm/dd)"));//Finds out the first invoice date

var count = 3; //sets a counter to only allow the loop to run three times

var quarterly = invoiceTotal/4; //Finds out the quartlery price


console.log("Your Invoice due on "+invoiceDate+" is in the amount of $"+quarterly+".");//Prints the first invoice date and cost.
//does a loop until the count is less than or equal to zero
do{
  invoiceDate.setDate(invoiceDate.getDate()+90); // adds 90days to the invoice date to find the next date 
  console.log("Your Invoice due on "+invoiceDate+" is in the amount of $"+quarterly+"."); //prints the results of the next date and price
  count-- // subtracts 1 from the count
}
while (count>0); //checks the count to see if the loop needs to run again.

