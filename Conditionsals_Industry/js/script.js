// Matthew Tolson
// 10/16/13
// Conditionals Industry

var clientStatus = prompt("What is the Client's Rank?\n (1-3)"); // gathering the clients ranking 
var priority = prompt("Is this an emergency?\n(y or n)"); // gathering the priority of the issue

if (priority ==="y" && clientStatus === "1"){ //determining if the issue is an emergency and client is ranked 1
  console.log("SLA states you need to respond within 15 mins") // Prints out the results if true
}else if (priority ==="y" && clientStatus === "2") { //determining if the issue is an emergency and client is ranked 2
  console.log("SLA states you need to respond within 30 mins")// Prints out the results if true
}else if (priority ==="y" && clientStatus === "3") {//determining if the issue is an emergency and client is ranked 3
  console.log("SLA states you need to respond within 90 mins")// Prints out the results if true
}else if (priority ==="n" && clientStatus === "1") {//determining if the issue is not an emergency and client is ranked 1
  console.log("SLA states you need to respond within 4 hours")// Prints out the results if true
}else if (priority ==="n" && clientStatus === "2") {//determining if the issue is not an emergency and client is ranked 2
  console.log("SLA states you need to respond within 8 hours")// Prints out the results if true
}else {
  console.log("SLA states you need to respond within 24 hours")// all other gets this print out
}