// Matthew Tolson
// 10/16/13
// Conditionals Industry

var clientStatus = prompt("What is the Client's Rank?\n (1-3)");
var priority = prompt("Is this an emergency?\n(y or n)");

if (priority ==="y" && clientStatus === "1"){
  console.log("SLA states you need to respond within 15 mins")
}else if (priority ==="y" && clientStatus === "2") {
  console.log("SLA states you need to respond within 30 mins")
}else if (priority ==="y" && clientStatus === "3") {
  console.log("SLA states you need to respond within 90 mins")
}else if (priority ==="n" && clientStatus === "1") {
  console.log("SLA states you need to respond within 4 hours")
}else if (priority ==="n" && clientStatus === "2") {
  console.log("SLA states you need to respond within 8 hours")
}else {
  console.log("SLA states you need to respond within 24 hours")
}