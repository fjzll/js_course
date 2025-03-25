// Ternary Operator

//Syntax
//condition ? ifTrue: ifFalse;

let soup = "Chicken noodle soup";
let isCustomerBanned = false;
let response = soup? "Yes we have soup" : "sorry no soup today";
console.log(response);
let soupAccess = isCustomerBanned ? "Sorry no soup for you"
    : soup
    ? `yes we have ${soup} today`
    : "sorry no soup today";
console.log(soupAccess);

let testScore = 79;
let myGrade =
    testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F"
console.log(myGrade);