// Conditions

let soup = "chicken noodle soup";
let reply

if (soup) {
    reply = `here is your order of ${soup}`;
}
else {
    reply = `sorry, we are out of ${soup}`;
}
console.log(reply);

let testScore = 89;
let collegeStudent = true;
let grade;
if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    }
    else {
        grade = "F";
    }
}

console.log(grade);

