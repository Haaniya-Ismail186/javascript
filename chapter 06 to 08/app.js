// write a program to take a number in a variable, do the required arithmetic to display the following result in your browser //
var a = 10;
document.write("Result<br>");
document.write("The value of a is: " + a + "<br><br>");

// Pre-increment
++a;
console.log(a);
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + a + "<br>");
a++;
console.log(a);
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
--a;
console.log(a);
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + a + "<br>");
a--;
console.log(a);
document.write("Now the value of a is: " + a + "<br><br>");

// Task 2: Complex Arithmetic //
var a = 2;
var b = 1;

document.write("Initially a is 2, b is 1<br>");

--a;
console.log(a);
document.write("Value of --a is: " + a + "<br>");

--b;
console.log(b);
document.write("Value of --b is: " + b + "<br>");

var part1 = a - b;
console.log(part1);

++b;
console.log(b);

var part2 = b;  
console.log(part2);
b--;

var result = part1 + part2 + 1; 
document.write("Final result is: " + result + "<br>");