// 1️⃣ Current Date & Time show karna
function showDateTime() {
    let now = new Date();
    document.write(now + "<br><br>");
}
showDateTime();


// 2️⃣ First & Last name se greeting
function greetUser(firstName, lastName) {
    document.write("Hello " + firstName + " " + lastName + "!<br><br>");
}
greetUser("Haani", "Ismail");


// 3️⃣ Do numbers add karna
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("Sum: " + addNumbers(5, 10) + "<br><br>");


// 4️⃣ Calculator Function
function calculator(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid Operator";
    }

    document.write("Calculator Result: " + result + "<br><br>");
}
calculator(10, 5, "*");


// 5️⃣ Square of a number
function square(num) {
    return num * num;
}
document.write("Square: " + square(6) + "<br><br>");


// 6️⃣ Factorial of a number
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
document.write("Factorial: " + factorial(5) + "<br><br>");


// 7️⃣ Counting between start & end number
function counting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br>");
}
counting(1, 10);


// 8️⃣ Nested function for Hypotenuse
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(value) {
        return value * value;
    }

    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    document.write("Hypotenuse: " + hypotenuse);
}

calculateHypotenuse(3, 4);

// 8️⃣ Hypotenuse using Nested Function
function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(value) {
        return value * value;
    }

    let hypotenuse = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    document.write("Hypotenuse: " + hypotenuse + "<br><br>");
}
calculateHypotenuse(3, 4);


// 9️⃣ Area of Rectangle
function areaRectangle(width, height) {
    return width * height;
}

// (i) Arguments as values
document.write("Area (values): " + areaRectangle(5, 10) + "<br>");

// (ii) Arguments as variables
let w = 7;
let h = 4;
document.write("Area (variables): " + areaRectangle(w, h) + "<br><br>");


// 🔟 Palindrome Check
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleanStr.split("").reverse().join("");

    if (cleanStr === reversed) {
        document.write(str + " is a Palindrome<br><br>");
    } else {
        document.write(str + " is NOT a Palindrome<br><br>");
    }
}
isPalindrome("madam");


// 1️⃣1️⃣ Capitalize First Letter of Each Word
function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(
            words[i].charAt(0).toUpperCase() + words[i].slice(1)
        );
    }

    return result.join(" ");
}
document.write(capitalizeWords("the quick brown fox") + "<br><br>");


// 1️⃣2️⃣ Find Longest Word
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}
document.write(
    "Longest word: " + findLongestWord("Web Development Tutorial") + "<br><br>"
);


// 1️⃣3️⃣ Count Specific Letter
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}
document.write(
    "Letter count: " + countLetter("JS ResourceS", "s")
);

// 13️⃣ Count occurrences of a specific letter
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    document.write(
        "Occurrences of '" + letter + "': " + count + "<br><br>"
    );
}

// Sample arguments
countLetter("JSResources.com", "o");


// 14️⃣ The Geometrizer

// Calculate Circumference of Circle
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write(
        "The circumference is " + circumference.toFixed(2) + "<br>"
    );
}

// Calculate Area of Circle
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write(
        "The area is " + area.toFixed(2) + "<br>"
    );
}

// Function Calls
calcCircumference(5);
calcArea(5);


