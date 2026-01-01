// Question 1: Check if the input is a number, uppercase letter, or lowercase letter using ASCII codes
var input = prompt("Question 1: Enter a character (number or letter):");
if (input) {
    var charCode = input.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
        alert("Input is a Number.");
    } else if (charCode >= 65 && charCode <= 90) {
        alert("Input is an Uppercase Letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        alert("Input is a Lowercase Letter.");
    } else {
        alert("Input is a special character.");
    }
}

// Question 2: Accept two integers and display the larger one or if they are equal
var num1 = parseInt(prompt("Question 2: Enter first integer:"));
var num2 = parseInt(prompt("Question 2: Enter second integer:"));
if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both integers are equal.");
}

// Question 3: Take a number from user and state if it is positive, negative, or zero
var number = parseFloat(prompt("Question 3: Enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Question 4: Take a single character and return true if it is a vowel, false otherwise
var char = prompt("Question 4: Enter a single character:").toLowerCase();
if (char.length === 1) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Question 5: Password validation system with empty check and match check
var correctPassword = "MySecurePassword123"; 
var userPassword = prompt("Question 5: Please enter your password:");

if (!userPassword) { 
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// Question 6: Fixed the incorrect if/else statement structure
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log("Question 6 Greeting: " + greeting);

// Question 7: Time format program using if, else if, and else based on a 24-hour clock
var time = parseInt(prompt("Question 7: Enter time in 24-hour format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time format.");
}