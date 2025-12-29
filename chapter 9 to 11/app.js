// 1. City name input program
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// 2. Gender input program
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

// 3. Traffic signal color program
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}

// 4. Car fuel program
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Script check (Condition test)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// --- TASK 1: City Name Input ---
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// --- TASK 2: Gender Input ---
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

// --- TASK 3: Traffic Signal Color ---
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}

// --- TASK 4: Car Fuel Check ---
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// --- TASK 5: Script & Condition Checks (from images) ---

// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if (c === 14){
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// --- 1. City Name Program ---
var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// --- 2. Gender Message Program ---
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

// --- 3. Traffic Signal Program ---
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}

// --- 4. Car Fuel Program ---
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// --- 5. Conditional Scripts Check ---
// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if (c === 14){
    alert("condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

// --- 6. Marks Sheet Program ---
var sub1 = parseFloat(prompt("Enter marks for Subject 1:"));
var sub2 = parseFloat(prompt("Enter marks for Subject 2:"));
var sub3 = parseFloat(prompt("Enter marks for Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks (e.g., 300):"));

var marksObtained = sub1 + sub2 + sub3;
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage.toFixed(0) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");

// --- 7. Guess Game ---
var secretNumber = 7; // Aap 1 se 10 ke darmiyan koi bhi number rakh sakte hain
var userGuess = +prompt("Guess the secret number (between 1 to 10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess! The number was " + secretNumber);
}

// --- 8. Divisible by 3 ---
var numToCheck = +prompt("Enter a number to check if it is divisible by 3:");

if (numToCheck % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}

// --- 9. Even or Odd ---
var inputNumber = +prompt("Enter a number to check if it is Even or Odd:");

if (inputNumber % 2 === 0) {
    alert("This is an Even number");
} else {
    alert("This is an Odd number");
}

// --- 10. Temperature Message ---
var T = +prompt("Enter the current temperature:");

if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today’s Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

// --- 11. Calculator ---
var firstNumber = +prompt("Enter first number:");
var secondNumber = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
} else if (operation === "-") {
    alert(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
} else if (operation === "*") {
    alert(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
} else if (operation === "/") {
    alert(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
} else if (operation === "%") {
    alert(firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber));
} else {
    alert("Invalid operation! Please use +, -, *, / or %.");
}