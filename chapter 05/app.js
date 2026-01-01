var num1 = 10;
var num2 = 20;
var num3 = num1 + num2;
console.log(num3);
document.write("addition of " + num1 + " and " + num2 + " is " + num3 + "<br><br>");

var num1 = 20;
var num2 = 10;
var num3 = num1 - num2;
console.log(num3);
document.write("subtraction of " + num1 + " and " + num2 + " is " + num3 + "<br><br>");

var num1 = 10;
var num2 = 20;
var num3 = num1 * num2;
console.log(num3);
document.write("multiplication of " + num1 + " and " + num2 + " is " + num3 + "<br><br>");

var num1 = 10;
var num2 = 20;
var num3 = num1 / num2;
console.log(num3);
document.write("division of " + num1 + " and " + num2 + " is " + num3 + "<br><br>");

var num1 = 10;
var num2 = 20;
var num3 = num1 % num2;
console.log(num3);
document.write("remainder of " + num1 + " and " + num2 + " is " + num3 + "<br><br>");

//TASK 2//
var num;
document.write("Value after declaration is undefined<br><br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br><br>");

var ticketPrice = 600;
var totalcost = ticketPrice * 5;
console.log(totalcost);
document.write("Total cost to buy 5 tickets is " + totalcost + " PKR<br><br>");

var tablenum = 4;
document.write("Table of " + tablenum + ":<br><br>");
document.write(tablenum + " x 1 = " + (tablenum * 1) + "<br>");
document.write(tablenum + " x 2 = " + (tablenum * 2) + "<br>");
document.write(tablenum + " x 3 = " + (tablenum * 3) + "<br>");
document.write(tablenum + " x 4 = " + (tablenum * 4) + "<br>");
document.write(tablenum + " x 5 = " + (tablenum * 5) + "<br>");
document.write(tablenum + " x 6 = " + (tablenum * 6) + "<br>");
document.write(tablenum + " x 7 = " + (tablenum * 7) + "<br>");
document.write(tablenum + " x 8 = " + (tablenum * 8) + "<br>");
document.write(tablenum + " x 9 = " + (tablenum * 9) + "<br>");
document.write(tablenum + " x 10 = " + (tablenum * 10) + "<br><br>");

var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingcharges = 100;

// Yahan calculation sahi ki gayi hai: (Price * Quantity)
var totalcost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingcharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + qtyItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + qtyItem2 + "<br>");
document.write("Shipping Charges " + shippingcharges + "<br><br>");
document.write("Total cost of your order is " + totalcost + " PKR");