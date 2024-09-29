// Initialize the variable 'marks' with a value of 80
let marks = 80;

// Check the range of the marks to determine the grade
if (marks >= 79 && marks <= 100) {
    console.log("A");  // Grade A for marks between 79 and 100
} else if (marks >= 60 && marks < 79) {
    console.log("B");  // Grade B for marks between 60 and 78
} else if (marks >= 49 && marks < 60) {
    console.log("C");  // Grade C for marks between 49 and 58
} else if (marks >= 40 && marks < 49) {
    console.log("D");  // Grade D for marks between 40 and 48
} else if (marks >= 0 && marks < 40) {
    console.log("E");  // Grade E for marks below 40
} else {
    console.log("invalid input"); // Handle any invalid marks (negative or above 100)
}
