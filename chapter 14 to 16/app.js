// Q1: Empty array using JS literal notation
var studentNamesLiteral = [];

// Q2: Empty array using JS object notation
var studentNamesObject = new Array();

// Q3: String array
var stringsArray = ["Ali", "Sara", "Ahmed"];

// Q4: Number array
var numbersArray = [100, 200, 300];

// Q5: Boolean array
var booleanArray = [true, false, true];

// Q6: Mixed array
var mixedArray = ["Zain", 45, true, "Karachi"];

// Q7: Qualifications Array and Display in Browser
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");

// List format mein display karne ke liye loop ka istemal:
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// --- QUESTION 8: Students Scores & Percentages ---

var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

document.write("<h3>Student Results:</h3>");
for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "% <br>");
}

document.write("<hr>"); // Line separator

// --- QUESTION 9: Array Manipulation (Colors) ---

// Initial array
var colors = ["Red", "Green", "Blue"];
document.write("<h3>Color Operations:</h3>");
document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

// a. Add color to beginning
var colorToStart = prompt("Beginning mein kaunsa rang add karna hai?");
colors.unshift(colorToStart);
document.write("<b>a. After adding to start:</b> " + colors + "<br>");

// b. Add color to end
var colorToEnd = prompt("End mein kaunsa rang add karna hai?");
colors.push(colorToEnd);
document.write("<b>b. After adding to end:</b> " + colors + "<br>");

// c. Add two more colors to beginning
colors.unshift("Yellow", "Purple");
document.write("<b>c. After adding two more at start:</b> " + colors + "<br>");

// d. Delete first color
colors.shift();
document.write("<b>d. After deleting first color:</b> " + colors + "<br>");

// e. Delete last color
colors.pop();
document.write("<b>e. After deleting last color:</b> " + colors + "<br>");

// f. Add color at specific index
var indexToAdd = parseInt(prompt("Kis index par rang add karna hai?"));
var colorName = prompt("Rang ka naam kya hai?");
colors.splice(indexToAdd, 0, colorName);
document.write("<b>f. After adding at index " + indexToAdd + ":</b> " + colors + "<br>");

// g. Delete color(s) from specific index
var indexToDelete = parseInt(prompt("Kis index se delete karna shuru karein?"));
var howManyToDelete = parseInt(prompt("Kitne rang delete karne hain?"));
colors.splice(indexToDelete, howManyToDelete);
document.write("<b>g. After deleting from index " + indexToDelete + ":</b> " + colors + "<br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores = [320, 230, 480, 120];
scores.sort(function(a, b) {
    return a - b;
});
console.log("Scores of Students : 320,230,480,120");
console.log("Ordered Scores of Students : " + scores);


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4); 
console.log("Cities list: " + cities);
console.log("Selected cities list: " + selectedCities);


// 12. Write a program to create a single string from the below mentioned array: var arr = ["This ", " is ", " my ", " cat"]; (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log("Array: " + arr);
console.log("String: " + singleString);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// Naya khali array banana
var devices = [];

// Values ko one by one store karna (Pushing)
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Devices: " + devices);

// Values ko usi order mein access karna jis mein wo store hui thi (FIFO)
// shift() method pehli value nikal deta hai
console.log("Out: " + devices.shift()); // Output: keyboard
console.log("Out: " + devices.shift()); // Output: mouse
console.log("Out: " + devices.shift()); // Output: printer
console.log("Out: " + devices.shift()); // Output: monitor