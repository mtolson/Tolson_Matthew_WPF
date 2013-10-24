// Matthew Tolson
// 10/24/13
// Functions Industry

var invoiceTotal = parseInt(prompt("What is the Order Total?"));
var invoiceDate = new Date(prompt("What is the Date the Order was signed?\n (format yyyy/mm/dd)"));

var count = 3;
var quarterly = invoiceTotal/4;
console.log("Your Invoice due on "+invoiceDate+" is in the amount of $"+quarterly+".");

do{
  invoiceDate.setDate(invoiceDate.getDate()+90);
  console.log("Your Invoice due on "+invoiceDate+" is in the amount of $"+quarterly".");
  count--
}
while (count>0);

