// Loops
/*let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber);
    myNumber++;
}*/

// Do While loop will execute at least once
/*
let myNumber = 50;
do {
    console.log(myNumber);
    myNumber++;
} while (myNumber > 0);*/

// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let name = "Dave";
for (let i = 0; i <= name.length; i++) {
    console.log(name[i]);
}

// while true
let counter = 0;
let myLetter;
while (true){
    myLetter = name[counter];
    console.log(myLetter);
    if (myLetter === "v") break;
    counter++;
}