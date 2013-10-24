// Matthew Tolson
// 10/24/13
// Functions Industry

var invoiceTotal = parseInt(prompt("What is the Order Total?"));
var invoiceDate = new Date(prompt("What is the Date the Order was signed?\n (format yyyy/mm/dd)"));

var count = 3;
var quarterly = invoiceTotal/4;
console.log(invoiceDate);

do{
  invoiceDate = new Date(invoiceDate + 7776000000);
  console.log(invoiceDate);
  count--
}
while (count>0);

