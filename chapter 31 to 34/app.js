// --- QUESTION 1: Current Date and Time ---
let now = new Date();
document.write("<h3>Question 1: Current Date/Time</h3>");
document.write(now + "<br><hr>");


// --- QUESTION 2: Current Month in Words ---
let months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"];
let currentMonthIndex = now.getMonth(); // Yeh 0-11 tak index deta hai
let currentMonth = months[currentMonthIndex];

alert("Current month: " + currentMonth);
document.write("<h3>Question 2: Month</h3>");
document.write("Current month: " + currentMonth + "<br><hr>");


// --- QUESTION 3: First 3 Letters of Day ---
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDayIndex = now.getDay(); // Sunday=0, Monday=1...
let dayAbbreviation = days[currentDayIndex];

alert("Today is " + dayAbbreviation);
document.write("<h3>Question 3: Day Abbreviation</h3>");
document.write("Today is " + dayAbbreviation + "<br><hr>");


// --- QUESTION 4: Fun Day (Saturday/Sunday Check) ---
document.write("<h3>Question 4: Weekend Check</h3>");
// 0 is Sunday, 6 is Saturday
if (currentDayIndex === 0 || currentDayIndex === 6) {
    document.write("It's Fun day");
} else {
    document.write("It's a working day");
}

let  = new Date(); // Current date object

// --- QUESTION 5: Month Days Check ---
// .getDate() 1 se 31 tak ki date deta hai
document.write("<h3>Question 5: Date Check</h3>");
if (now.getDate() < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}
document.write("<br><hr>");


// --- QUESTION 6: Elapsed Time (Epoch) ---
document.write("<h3>Question 6: Elapsed Time</h3>");
let currentTimestamp = new Date();
let millisSince1970 = currentTimestamp.getTime(); // Milliseconds
let minutesSince1970 = millisSince1970 / (1000 * 60); // Minutes mein convert karne ke liye

document.write("Current Date: " + currentTimestamp + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisSince1970 + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutesSince1970 + "<br>");
document.write("<hr>");


// --- QUESTION 7: AM or PM Check ---
// .getHours() 0 se 23 tak ka waqt deta hai
let hours = now.getHours();
if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}

// --- QUESTION 8: Later Date (Last day of 2020) ---
// Note: Months 0 se start hote hain (11 = December)
let laterDate = new Date(2020, 11, 31);
document.write("<h3>Question 8: Later Date</h3>");
document.write("Later date: " + laterDate + "<br><hr>");


// --- QUESTION 9: Days Past Since 1st Ramadan 2015 ---
let ramadanStart = new Date("June 18, 2015");
let todayDate = new Date();

// Dono dates ka difference milliseconds mein nikalna
let diffInMs = todayDate - ramadanStart;

// Milliseconds ko days mein convert karna (1000ms * 60s * 60m * 24h)
let daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

document.write("<h3>Question 9: Ramadan Days Passed</h3>");
document.write(daysPassed + " days have passed since 1st Ramadan, 2015 <br><hr>");


// --- QUESTION 10: Seconds Elapsed Since Beginning of 2015 ---
let referenceDate = new Date(); // Aaj ki date
let startOf2015 = new Date("January 1, 2015");

// Difference in seconds (Millisecond diff divided by 1000)
let secondsPassed = Math.floor((referenceDate - startOf2015) / 1000);

document.write("<h3>Question 10: Seconds Since 2015</h3>");
document.write("On reference date " + referenceDate + ", <br>");
document.write(secondsPassed + " seconds had passed since beginning of 2015");

// --- QUESTION 11: Set Hour Ahead/Back ---
let date11 = new Date();
document.write("<h3>Question 11: Time Manipulation</h3>");
document.write("current date: " + date11 + "<br>");

// Hours extract karke 1 ghanta piche karna (Screenshot ke mutabiq)
let currentHour = date11.getHours();
date11.setHours(currentHour - 1); 

document.write("1 hour ago, it was " + date11 + "<br><hr>");


// --- QUESTION 12: 100 Years Back ---
let date12 = new Date();
document.write("<h3>Question 12: 100 Years Back</h3>");
document.write("current date: " + date12 + "<br>");

// Year ko 100 saal piche set karna
date12.setFullYear(date12.getFullYear() - 100);

alert("100 years back, it was " + date12);
document.write("100 years back, it was " + date12 + "<br><hr>");


// --- QUESTION 13: Age & Birth Year ---
let age = prompt("Please enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;

document.write("<h3>Question 13: Age Calculator</h3>");
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br><hr>");


// --- QUESTION 14: K-Electric Bill Generator ---
let customerName = "ABC Customer";
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let current = monthNames[new Date().getMonth()];
let units = 410;
let chargesPerUnit = 16;
let lateSurcharge = 350;

let netAmount = (units * chargesPerUnit).toFixed(2);
let grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);

document.write("<h3>Question 14: K-Electric Bill</h3>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of units: <b>" + units + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");

document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
document.write("Late Payment Surcharge: <b>" + lateSurcharge + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>");